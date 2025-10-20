# Requerimientos del Proyecto: Aplicación de Quiz con React

## Objetivo

Crear una aplicación web interactiva que presente a los usuarios un quiz con preguntas de opción múltiple, evalúe sus respuestas y muestre una puntuación final. El objetivo es aplicar conceptos intermedios y avanzados de React de forma práctica.

---

## ✅ Funcionalidades Mínimas (MVP)

1.  **Inicio del Quiz**: La aplicación debe mostrar una pantalla inicial o cargar directamente la primera pregunta.
2.  **Visualización de Preguntas**: En la pantalla, se debe mostrar una sola pregunta a la vez, junto con sus posibles respuestas (ej. 4 opciones).
3.  **Selección de Respuesta**: El usuario debe poder hacer clic en una de las opciones para seleccionarla como su respuesta.
4.  **Feedback Inmediato**:
    *   Una vez que el usuario selecciona una respuesta, la interfaz debe indicar si la respuesta fue **correcta** o **incorrecta**.
    *   Los botones de las otras opciones deben deshabilitarse para evitar que el usuario cambie su respuesta.
5.  **Navegación**: Debe haber un botón de "Siguiente Pregunta" que aparezca después de responder, para que el usuario pueda avanzar.
6.  **Barra de Progreso**: Implementar un indicador visual (una barra o texto como "Pregunta 3 de 10") que muestre el progreso del usuario en el quiz.
7.  **Pantalla Final**: Al responder la última pregunta, la aplicación debe mostrar una pantalla con la puntuación final del usuario (ej. "Obtuviste 8 de 10 respuestas correctas").
8.  **Reiniciar Quiz**: En la pantalla final, debe haber un botón para "Jugar de Nuevo" que reinicie el estado de la aplicación y comience el quiz desde la primera pregunta.

---

## ⚙️ Especificaciones Técnicas

*   **Estado Principal**: El estado global del quiz (preguntas, pregunta actual, puntuación, estado del juego) debe ser manejado obligatoriamente con el hook `useReducer`.
*   **Lógica Aislada**: Toda la lógica de manejo del estado del quiz (avanzar pregunta, computar puntaje, etc.) debe estar encapsulada en un **Custom Hook** (ej. `useQuiz`).
*   **Tipado Estricto**: Todo el proyecto debe usar **TypeScript**. Define interfaces claras para tus estructuras de datos (`Question`, `Answer`, props de componentes, etc.).
*   **Estilos Modulares**: Los estilos de los componentes deben ser locales y encapsulados usando **CSS Modules** (`.module.css`).

---

## 🏗️ Estructura de Datos Sugerida

Puedes empezar con un archivo (ej. `questions.ts`) que contenga un array de preguntas hardcodeadas. Usa una interfaz como esta:

```typescript
export interface Question {
  text: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
}
```

---

## 🧩 Desglose de Componentes Sugerido

Puedes organizar tu aplicación en los siguientes componentes:

*   `App.tsx`: Componente principal que orquesta el estado y renderiza los demás componentes.
*   `QuestionCard.tsx`: Muestra el texto de la pregunta y los botones de opción.
*   `ProgressBar.tsx`: Muestra el progreso actual del quiz.
*   `ScoreScreen.tsx`: Muestra la puntuación final y el botón para reiniciar.

---

¡Ahora es tu turno! Intenta construir el proyecto siguiendo estos requerimientos. Cuando te sientas atascado o quieras una revisión de tu código para aplicar mejores prácticas, avísame. Estaré aquí para ayudarte.
