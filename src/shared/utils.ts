import { Question } from "@/types/custom";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

let classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const generatePageTitle = (title: string) => {
  return `${title} | Dr. Ritika Tanwar`;
};

const parseQuestions = (text: string): Question[] => {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const questions: Question[] = [];

  let currentQuestion = "";
  let options: string[] = [];

  lines.forEach((line) => {
    // Detect options A-D or 1-4
    if (/^(?:[A-D]|[1-4])[\).\-\s]+/i.test(line)) {
      const cleanOption = line.replace(/^(?:[A-D]|[1-4])[\).\-\s]+/i, "");

      options.push(cleanOption);

      if (options.length === 4) {
        questions.push({
          question: currentQuestion,
          options,
        });

        currentQuestion = "";
        options = [];
      }
    } else {
      // remove numbering like "1." from question
      currentQuestion = line.replace(/^\d+[\).\s]*/, "");
    }
  });

  return questions;
};

export { classNames, generatePageTitle, parseQuestions };
