import { useGetTests } from '@/entities/tests';
import { Filters } from './Filters';
import { SearchBar } from './SearchBar';
import { TestList } from './TestList';
import { ResetSearch } from './ResetSearch';
import { useFilters } from '../lib/useFilters';
import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  const { search, order, sortBy } = useFilters();
  const tests = useGetTests({ search, order, sortBy });

  const hasTests = tests && tests?.length > 0;
  const noTests = tests && tests.length === 0;

  return (
    <div className={styles.wrapper}>
      <SearchBar count={tests?.length ?? 0} />

      {hasTests && (
        <div className={styles.content}>
          <Filters />
          <TestList tests={tests} />
        </div>
      )}

      {noTests && <ResetSearch />}
    </div>
  );
};
