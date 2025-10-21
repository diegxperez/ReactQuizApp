import s from './progressbar.module.css'

export const ProgressBar = () => {
  return (
    <div className={s.progressbar}>
      <div className={s.progressbar__indicator}>
        <p>Pregunta 1 de 10</p>
        <p>10%</p>
      </div>

      <div className={s.progressbar__container}>
        <div className={s.progressbar__filler} />
      </div>
    </div>
  )
}
