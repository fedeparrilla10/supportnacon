import Button from "./Button";

const EndMessage = ({ message, handleOptionSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <img
        src="/supportnacon/questionmark.svg"
        alt="Realizar una consulta"
        width={70}
        height={70}
      />
      <p className="text-xl">
        ¡Muchas gracias! En breve estaremos en contacto con usted
      </p>
      <Button content="Volver a inicio" onClick={() => handleOptionSelect(1)} />
    </div>
  );
};

export default EndMessage;
