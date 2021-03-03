import { useContext } from 'react'
import { Container, ButtonCountDown, ButtonCountDownActive } from './styles'

import { CountdownContext } from '../../hooks/CountdownContext'

function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>

      { hasFinished ? (
        <ButtonCountDown disabled>
          Ciclo encerrado
        </ButtonCountDown>
      ) : <>
      { isActive ? (
        <ButtonCountDownActive type="button" onClick={resetCountdown}>
          Abandonar ciclo
        </ButtonCountDownActive>) : (
        <ButtonCountDown type="button" onClick={startCountdown}>
          Iniciar um ciclo
        </ButtonCountDown>
      )}
      </> }

      
    </div>
  )
}

export default Countdown
