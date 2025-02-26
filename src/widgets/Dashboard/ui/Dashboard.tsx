import { useGetTests } from '@/shared/api';
import { Filters } from './Filters';
import { SearchBar } from './SearchBar';
import { TestList } from './TestList';
import { useFilters } from '../lib/useFilters';
import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  const { search, order, sortBy } = useFilters();
  const tests = useGetTests({ search, order, sortBy });

  return (
    <div className={styles.wrapper}>
      <SearchBar count={tests.length} />
      <Filters />
      <TestList tests={tests} />
    </div>
  );
};
