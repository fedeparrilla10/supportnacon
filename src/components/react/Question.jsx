const Question = ({ type, question, options, handleOptionSelect }) => {
  return (
    <section className="w-2/4">
      {type === "question" && (
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <img
            src="/supportnacon/questionmark.svg"
            alt="Realizar una consulta"
            width={70}
            height={70}
          />
          <h3 className="text-xl">{question}</h3>
          <div className="flex items-center justify-around w-2/4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option.nextId)}
                className="py-2 px-5 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg shadow-lg 
                transition duration-200 ease-in-out transform  focus:outline-none"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Question;
