import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0,0,0,0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {flex: 1;}

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const ButtonCountDown = styled('button')`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background-color: var(--blue);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }
  
  &:disabled {
    background-color: var(--white);
    color: var(--text);
    cursor: not-allowed;
    border-bottom: 4px solid #58A646;
  }
`;

export const ButtonCountDownActive = styled('button')`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s ease;

  background-color: var(--white);
  color: var(--title);
  &:not(:disabled):hover {
    background-color: var(--red);
    color: var(--white);
  }
`;