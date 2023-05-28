import styles from './page.module.css';
import Headers from '@/components/Headers';

export default function Home() {
  return (
    <main className={styles.main}>
      <Headers />
    </main>
  );
}
