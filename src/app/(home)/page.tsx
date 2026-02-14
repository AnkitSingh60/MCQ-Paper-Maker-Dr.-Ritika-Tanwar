"use client";

import { useState, useRef } from "react";
import { parseQuestions } from "@/shared/utils";
import PaperPreview from "../components/PaperPreview";
import { Question } from "@/types/custom";

const Home = () => {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!text.length) {
      alert("Paper banane ke liye pehle questions to daalo, guru 😄");
      return;
    } else {
      setQuestions(parseQuestions(text));
    }
  };

  const downloadPDF = () => {
    if (!questions.length) {
      alert("PDF hawa se nahi banegi, pehle paper generate karo 😄");
      return;
    } else {
      window.print();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="p-6 bg-gray-100 min-h-screen w-full max-w-5xl">
        <h1 className="flex justify-center items-center text-2xl font-bold mb-2 no-print text-gray-800 border border-gray-500">
          MCQ Question Paper Generator ~ Dr. Ritika Tanwar
        </h1>

        <textarea
          className="w-full h-60 border border-gray-500 p-3 rounded bg-white mt-6"
          placeholder={`The phenomenon of photoelectric emission establishes the:
A. Wave nature of light
B. Particle nature of light
C. Polarisation of light
D. Interference of light`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Question Counter */}
        {questions.length > 0 && (
          <div className="flex justify-center mt-6 no-print">
            <div className="bg-linear-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-semibold">
              <p className="animate-pulse">
                Detected: {questions.length} Questions
              </p>
            </div>
          </div>
        )}
        <div className="flex justify-center items-center mt-6 gap-3 no-print">
          <button
            onClick={handleGenerate}
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Generate Paper
          </button>

          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Download PDF
          </button>
        </div>

        <div className="mt-8">
          <PaperPreview ref={previewRef} questions={questions} />
        </div>

        <footer className="text-center mt-10 text-gray-500 no-print animate-bounce">
          Made with ❤️ by Ankit Tanwar
        </footer>
      </main>
    </div>
  );
};

export default Home;
