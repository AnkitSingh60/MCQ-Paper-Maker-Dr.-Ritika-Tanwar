import { Question } from "@/types/custom";
import Image from "next/image";
import { forwardRef } from "react";

const labels = ["A", "B", "C", "D"];

const PaperPreview = forwardRef<HTMLDivElement, { questions: Question[] }>(
  ({ questions }, ref) => {
    const rows = [];

    for (let i = 0; i < questions.length; i += 2) {
      rows.push([questions[i], questions[i + 1]]);
    }

    return (
      <div
        ref={ref}
        className="paper-container bg-white mx-auto shadow mb-6 p-8"
      >
        {questions.length === 0 ? (
          <>
            <div>
              <Image
              className="animate-pulse"
                src="/emptyStateDr.RitikaTanwar.svg"
                alt="img"
                width={250}
                height={250}
                loading="eager"
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              {rows.map(([leftQ, rightQ], rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-2 gap-12">
                  {/* Left Question */}
                  <div className="text-sm leading-tight">
                    {leftQ && (
                      <>
                        <p>
                          <strong>{rowIndex * 2 + 1}.</strong> {leftQ.question}
                        </p>

                        <div className="ml-4 mt-1 space-y-0.5">
                          {leftQ.options.map((opt, i) => (
                            <p key={i}>
                              {labels[i]}. {opt}
                            </p>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right Question */}
                  <div className="text-sm leading-tight">
                    {rightQ && (
                      <>
                        <p>
                          <strong>{rowIndex * 2 + 2}.</strong> {rightQ.question}
                        </p>

                        <div className="ml-4 mt-1 space-y-0.5">
                          {rightQ.options.map((opt, i) => (
                            <p key={i}>
                              {labels[i]}. {opt}
                            </p>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  },
);

PaperPreview.displayName = "PaperPreview";

export default PaperPreview;
