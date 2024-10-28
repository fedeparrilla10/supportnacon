import { useState } from "react";
import { questions } from "../../data/questions";
import Hero from "./Hero";
import Question from "./Question";

const MainSupport = () => {
  const [questionId, setQuestionId] = useState(1);

  const currentQuestion = questions.find((q) => q.id === questionId);

  const handleOptionSelect = (nextId) => {
    setQuestionId(nextId);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-32">
      {questionId === 1 ? (
        <>
          <Hero handleOptionSelect={handleOptionSelect} />
        </>
      ) : (
        <Question
          type={currentQuestion.type}
          question={currentQuestion.question}
          options={currentQuestion.options || []}
          handleOptionSelect={handleOptionSelect}
        />
      )}
    </section>
  );
};

export default MainSupport;
