import s from './homepage.module.css'
import react from '../../assets/react.svg'

export const HomePage = () => {
  return (
    <>
      <div className={s.card}>
        <figure className={s.card__figure}>
          <img src={react} alt="react logo" />
        </figure>
        <h1 className={s.card__title}>Quiz de React</h1>
        <p className={s.card__description}>Prueba tus conocimientos sobre React</p>
        <p className={s.card__description}>10 Preguntas</p>
        <button className={s.card__button}>Comenzar Quiz</button>
      </div>
    </>
  )
}
