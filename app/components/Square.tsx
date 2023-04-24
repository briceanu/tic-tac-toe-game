import React from 'react';
import styles from '../styles/square.module.scss';
type Player = 'X' | 'O' | 'BOTH' | null;

const Square = ({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) => {
  if (!value) {
    console.log(value);
    return (
      <button
        className={styles.square}
        onClick={onClick}
        disabled={Boolean(winner)}
      />
    );
  }

  return (
    <button
      className={`${styles.square} square_${value.toLocaleLowerCase()}`}
      disabled
    >
      {value}
    </button>
  );
};

export default Square;
