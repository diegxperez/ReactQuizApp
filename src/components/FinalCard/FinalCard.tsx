import s from './finalcard.module.css'
import react from '../../assets/react.svg'

export const FinalCard = () => {
  return (
    <div className={s.card}>
      <figure className={s.card__figure}>
        <img src={react} alt="react logo" />
      </figure>
      <h1 className={s.card__title}>¡Quiz Completado!</h1>
      <p className={s.card__description}>¡Excelente trabajo! Dominas React muy bien</p>
      <p className={s.card__points}>9/10</p>
      <p className={s.card__califications}>90% Correctas</p>
      <button className={s.card__submit}>Intentar de Nuevo</button>
    </div>
  )
}
