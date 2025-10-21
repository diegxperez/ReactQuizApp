import s from './initialcard.module.css'
import react from '../../assets/react.svg'

export const InitialCard = () => {
  return (
    <>
      <div className={s.card}>
        <figure className={s.card__figure}>
          <img src={react} alt="react logo" />
        </figure>
        <h1 className={s.card__title}>Quiz de React</h1>
        <p className={s.card__description}>Prueba tus conocimientos sobre React</p>
        <p className={s.card__questions}>10 Preguntas</p>
        <button className={s.cta}>Comenzar Quiz</button>
      </div>
    </>
  )
}
