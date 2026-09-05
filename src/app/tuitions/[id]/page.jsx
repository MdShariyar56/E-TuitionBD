import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import TuitionDetails from "@/components/tuitions/TuitionDetails";
import { mockTuitions } from "@/data/mockTuitions";

export default async function TuitionDetailsPage({ params }) {
  const { id } = await params;

  const tuition = mockTuitions.find((item) => item.id === Number(id));

  if (!tuition) {
    return (
      <main className="flex min-h-[60vh] items-center bg-white">
        <div className="mx-auto max-w-md px-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Tuition Not Found
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            The tuition opportunity you&apos;re looking for doesn&apos;t exist
            or may have been removed.
          </p>
          <Link
            href="/tuitions"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700"
          >
            <HiArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Tuitions
          </Link>
        </div>
      </main>
    );
  }

  const relatedTuitions = mockTuitions
    .filter((item) => item.id !== tuition.id)
    .slice(0, 3);

  return <TuitionDetails tuition={tuition} relatedTuitions={relatedTuitions} />;
}
