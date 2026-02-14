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
  const blocks = text.trim().split("\n\n");

  return blocks.map((block) => {
    const lines = block.split("\n");

    return {
      question: lines[0],
      options: lines.slice(1),
    };
  });
};

export { classNames, generatePageTitle, parseQuestions };
