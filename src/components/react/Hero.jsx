const Hero = ({ handleOptionSelect }) => {
  return (
    <main className="flex flex-col items-center gap-8">
      <div>
        <p>
          Gracias por contactar con el servicio de ATENCIÓN AL CLIENTE de NACON.
        </p>
        <h2 className="text-center text-wrap text-4xl md:text-4xl tracking-wide">
          ¿Cómo podemos ayudarte?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <button
          className="border-2 border-gray-500 w-48 h-48 grid grid-cols-1 grid-rows-2 place-items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 px-4"
          onClick={() => handleOptionSelect(2)}
        >
          <img
            src="/supportnacon/questionmark.svg"
            alt="Realizar una consulta"
            width={70}
            height={70}
          />
          <p className="text-xl text-center">Realizar una consulta</p>
        </button>
        <button
          className="border-2 border-gray-500 w-48 h-48 grid grid-cols-1 grid-rows-2 place-items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 px-4"
          onClick={() => handleOptionSelect(3)}
        >
          <img
            src="/supportnacon/warranty.svg"
            alt="Realizar una consulta"
            width={70}
            height={70}
          />
          <p className="text-xl text-center">Garantía de producto</p>
        </button>
      </div>
    </main>
  );
};

export default Hero;
