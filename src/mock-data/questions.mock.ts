import type { Question } from "../type/question.interface";

export const mockQuestions: Question[] = [
  {
    id: 1,
    question: '¿Cuál es la función principal del Hook useState en un componente funcional de React?',
    answers: [
      { answer: 'Gestionar el ciclo de vida del componente', isCorrect: false },
      { answer: 'Definir y actualizar variables de estado que React monitorea', isCorrect: true },
      { answer: 'Crear una referencia directa a un elemento del DOM', isCorrect: false },
      { answer: 'Optimizar el rendimiento de las funciones de callback', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: `¿Qué es el 'Virtual DOM' de React ?`,
    answers: [
      { answer: 'Una versión optimizada del DOM nativo que se actualiza directamente', isCorrect: false },
      { answer: 'Un objeto de JavaScript, que es una representación en memoria de la estructura del DOM real', isCorrect: true },
      { answer: 'Una capa de seguridad que previene inyecciones XSS', isCorrect: false },
      { answer: 'El paquete npm que debe instalarse para el renderizado inicial', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: '¿Cuál es la regla fundamental al actualizar el estado en React(ej., usando el setter de useState)?',
    answers: [
      { answer: 'Mutar(modificar directamente) el objeto de estado y luego llamar al setter', isCorrect: false },
      { answer: 'Llamar al setter solo una vez por cada renderizado del componente', isCorrect: false },
      { answer: 'El estado siempre debe ser inmutable; se debe crear y asignar un nuevo objeto o valor', isCorrect: true },
      { answer: 'El estado debe ser una copia profunda del estado anterior', isCorrect: false }
    ]
  },
  {
    id: 4,
    question: '¿Qué prop se utiliza para pasar datos desde un componente padre a un componente hijo en React?',
    answers: [
      { answer: 'State', isCorrect: false },
      { answer: 'Key', isCorrect: false },
      { answer: 'Context', isCorrect: false },
      { answer: 'Props', isCorrect: true }
    ]
  },
  {
    id: 5,
    question: '¿Por qué es crucial incluir la prop key al renderizar una lista de elementos en React (ej., con map)?',
    answers: [
      { answer: 'Para asegurar que los estilos de CSS se apliquen correctamente a cada elemento', isCorrect: false },
      { answer: 'Para ayudar a React a identificar qué elementos han cambiado, han sido añadidos o eliminados de forma eficiente', isCorrect: true },
      { answer: 'Es requerida por TypeScript para garantizar la seguridad de tipos en los arrays', isCorrect: false },
      { answer: 'Permite que los elementos de la lista puedan ser arrastrados', isCorrect: false }
    ]
  },
  {
    id: 6,
    question: '¿Qué devuelve el código JSX?',
    answers: [
      { answer: 'Una cadena de texto (string) que representa el código HTML', isCorrect: false },
      { answer: 'Un objeto del DOM nativo (Document Object Model)', isCorrect: false },
      { answer: 'Un Fragmento de React (<></>)', isCorrect: false },
      { answer: 'Un objeto de JavaScript que describe lo que debe renderizarse (elementos de React)', isCorrect: true }
    ]
  },
  {
    id: 7,
    question: '¿Qué hace el Hook useEffect sin un array de dependencias ([])?',
    answers: [
      { answer: 'Se ejecuta después del montaje inicial y después de CADA actualización/re-renderizado del componente', isCorrect: true },
      { answer: 'Solo se ejecuta una vez, después del montaje inicial del componente', isCorrect: false },
      { answer: 'Provoca un error y detiene la aplicación, ya que el array es obligatorio', isCorrect: false },
      { answer: 'Se ejecuta cada 500ms automáticamente', isCorrect: false }
    ]
  },
  {
    id: 8,
    question: 'En TypeScript con React, ¿cuál es la forma correcta de definir los tipos para las props de un componente funcional?',
    answers: [
      { answer: `Usando el propType Checker del paquete 'prop-types'`, isCorrect: false },
      { answer: 'No es necesario definir los tipos, React los infiere automáticamente', isCorrect: false },
      { answer: 'Definiendo una interface o un type para las props', isCorrect: true },
      { answer: 'Utilizando la palabra clave extends React.Component', isCorrect: false }
    ]
  },
  {
    id: 9,
    question: '¿Qué prop se utiliza para manejar eventos de clic en un botón de React?',
    answers: [
      { answer: `onclick'`, isCorrect: false },
      { answer: 'handleOnClick', isCorrect: false },
      { answer: 'onClick', isCorrect: true },
      { answer: 'onMouseClick', isCorrect: false }
    ]
  },
  {
    id: 10,
    question: '¿Cuál es el propósito del Hook useContext?',
    answers: [
      { answer: 'Permitir que los componentes accedan a datos globales sin pasar props a través de cada nivel', isCorrect: true },
      { answer: `Ejecutar lógica asíncrona y efectos secundarios en el componente'`, isCorrect: false },
      { answer: 'Optimizar componentes envolviéndolos para prevenir re-renderizados innecesarios', isCorrect: false },
      { answer: 'Manejar la navegación entre diferentes rutas', isCorrect: false }
    ]
  }
]
