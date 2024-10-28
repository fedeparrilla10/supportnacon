export const questions = [
  {
    id: 1,
    type: "question",
    options: [
      { text: "Consulta general", nextId: 2 },
      { text: "Gestionar Garantía", nextId: 3 },
    ],
  },
  {
    id: 2,
    type: "question",
    question:
      "¿Es una consulta general o es una consulta sobre alguno de nuestros productos?",
    options: [
      { text: "Consulta general", nextId: 4 },
      { text: "Consulta sobre un producto", nextId: 5 },
    ],
  },
  {
    id: 3,
    type: "form",
    question: "Por favor, introduzca sus datos para poder contactar con usted:",
  },
  {
    id: 4,
  },
  {
    id: 5,
    type: "question",
    question: "¿Qué producto es sobre el que quiere hacer su consulta?",
  },
];
