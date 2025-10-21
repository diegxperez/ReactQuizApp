import s from './homepage.module.css'
import { ProgressBar } from "../components/progressbar/ProgressBar"
import { Questions } from '../components/question/Questions'

export const HomePage = () => {
  return (
    <>
      <div className={s.card}>
        <ProgressBar />
        <Questions />
      </div>
    </>
  )
}
