import { useState } from "react";
import { questions } from "../../data/questions";
import { products } from "../../data/products";
import Hero from "./Hero";
import Stepper from "./Stepper";

const MainSupport = () => {
  const [questionId, setQuestionId] = useState(1);

  const currentQuestion = questions.find((q) => q.id === questionId);

  const handleOptionSelect = (nextId) => {
    setQuestionId(nextId);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-12 md:pt-24">
      {questionId === 1 ? (
        <>
          <Hero handleOptionSelect={handleOptionSelect} />
        </>
      ) : (
        <Stepper
          type={currentQuestion.type}
          question={currentQuestion.question}
          message={currentQuestion.message}
          options={currentQuestion.options || []}
          products={products}
          handleOptionSelect={handleOptionSelect}
          freeWriting={currentQuestion.freeWriting}
        />
      )}
    </section>
  );
};

export default MainSupport;
