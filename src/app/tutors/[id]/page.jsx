import { notFound } from "next/navigation";
import TutorsDetails from "@/components/tutors/TutorsDetails";
import { getTutorById, getTutors } from "@/lib/api/tutors";

/**
 * Picks up to `limit` related tutors, prioritizing:
 *   1. same subject
 *   2. same expertise
 *   3. same location
 * then filling any remaining slots with other tutors.
 * The current tutor is always excluded.
 */
function getRelatedTutors(tutor, allTutors, limit = 3) {
  const others = allTutors.filter((item) => item.id !== tutor.id);

  const scored = others
    .map((item) => {
      const subjectMatch = item.subjects.some((s) =>
        tutor.subjects.includes(s)
      )
        ? 1
        : 0;
      const expertiseMatch = item.expertise.some((e) =>
        tutor.expertise.includes(e)
      )
        ? 1
        : 0;
      const locationMatch = item.location === tutor.location ? 1 : 0;
      return { tutor: item, subjectMatch, expertiseMatch, locationMatch };
    })
    .sort((a, b) => {
      if (b.subjectMatch !== a.subjectMatch)
        return b.subjectMatch - a.subjectMatch;
      if (b.expertiseMatch !== a.expertiseMatch)
        return b.expertiseMatch - a.expertiseMatch;
      return b.locationMatch - a.locationMatch;
    });

  return scored.slice(0, limit).map((item) => item.tutor);
}

/**
 * /tutors/[id]
 *
 * Data flow (backend-ready):
 *   mockTutors.js  ->  lib/api/tutors.js  ->  this page  ->  TutorProfile.jsx
 *
 * Only getTutorById()/getTutors() are used here — mockTutors is never
 * imported directly. When the Express backend is ready, only
 * lib/api/tutors.js needs to change.
 */
export default async function TutorDetailsPage({ params }) {
  // Next.js App Router passes `params` as a Promise in recent versions.
  const { id } = await params;

  const [tutor, allTutors] = await Promise.all([
    getTutorById(id),
    getTutors(),
  ]);

  // Invalid / unknown ID — hand off to not-found.jsx
  if (!tutor) {
    notFound();
  }

  const relatedTutors = getRelatedTutors(tutor, allTutors, 3);

  return <TutorsDetails tutor={tutor} relatedTutors={relatedTutors} />;
}