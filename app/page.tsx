import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import Board from './components/Board';
import Square from './components/Square';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.page}>
      <Board />
    </div>
  );
}
