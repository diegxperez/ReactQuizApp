import s from './questions.module.css'

const questions = ['useEffect', 'useState', 'useContext', 'useReducer']
export const Questions = () => {
  return (
    <>
      <div className={s.card}>
        <p className={s.card__questionCount}>Pregunta 1</p>
        <h2 className={s.card__questionText}>Que hook se utiliza para manejar el estado en componentes funcionales?</h2>
        <div className={s.card__options}>
          {
            questions.map((question, index) => (
              <button key={index} className={s.card__optionButton}>{question}</button>
            ))
          }
        </div>
        <button className={s.card__submit}>Confirmar Respuesta</button>
      </div>
    </>
  )
}
