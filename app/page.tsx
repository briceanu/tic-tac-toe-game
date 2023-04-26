import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import Board from './components/Board';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} ${styles.page}`}>
      <Board />
    </div>
  );
}
