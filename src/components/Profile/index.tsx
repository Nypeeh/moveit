import { useContext } from 'react';
import { ChallengesContext } from '../../hooks/ChallengesContext';
import { Container } from './styles'

export default function Profile () {
  const { level } = useContext(ChallengesContext)

  return (
    <Container>
      <img src="https://github.com/nypeeh.png" alt="Avatar"/>
      <div>
        <strong>Leonardo Armejo</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </Container>
  );
}