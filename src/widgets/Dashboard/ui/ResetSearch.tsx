import { Button } from '@/shared/ui/Button';
import { useFilters } from '../lib/useFilters';
import styles from './ResetSearch.module.scss';

export const ResetSearch = () => {
  const { setSearch } = useFilters();

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Your search did not match any results.</div>
      <Button className={styles.button} onClick={() => setSearch('')}>
        Reset
      </Button>
    </div>
  );
};
