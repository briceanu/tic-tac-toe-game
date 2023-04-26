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
    return (
      <button
        className={styles.square}
        onClick={onClick}
        disabled={Boolean(winner)}
      />
    );
  }

  const className = value === 'X' ? styles.square_x : styles.square_o;
  return (
    <button className={`${styles.square} ${className}`} disabled>
      {value}
    </button>
  );
};

export default Square;
