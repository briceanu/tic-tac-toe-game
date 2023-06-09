'use client';

import React, { useState, useEffect } from 'react';

import styles from '../styles/board.module.scss';
import Square from './Square';
type Player = 'X' | 'O' | null | 'BOTH';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<Player>(null);
  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? 'X' : 'O');
  }

  function calculateWinner(squares: Player[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const initialPlayer = Math.round(Math.random() * 1) === 1 ? 'X' : 'O';
    setCurrentPlayer(initialPlayer);
  }, []);
  //
  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }
    if (!w && !squares.filter((square) => !square).length) {
      setWinner('BOTH');
    }
  }, [squares]);

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className={styles.board}>
      {!winner && (
        <p className={styles.paragraph}>Hey {currentPlayer}, it is your turn</p>
      )}
      {winner && winner !== 'BOTH' && (
        <p className={styles.winner_message}>Congratulations {winner}</p>
      )}
      {winner && winner === 'BOTH' && (
        <p>Congratulation your are both winners</p>
      )}
      <div className={styles.grid}>
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
      <button className={styles.reset} onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Board;
