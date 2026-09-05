import { mockTutors } from "@/data/mockTutors";

const MOCK_DELAY_MS = 500;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getTutors() {
  await delay(MOCK_DELAY_MS);
  return mockTutors;
}

export async function getTutorById(id) {
  await delay(MOCK_DELAY_MS);
  return mockTutors.find((tutor) => String(tutor.id) === String(id));
}
