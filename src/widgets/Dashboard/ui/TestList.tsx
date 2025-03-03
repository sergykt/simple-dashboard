import { type FC, memo } from 'react';
import { type TestWithSite } from '@/entities/tests';
import { TestItem } from './TestItem';
import styles from './TestList.module.scss';

interface TestListProps {
  tests: TestWithSite[];
}

export const TestList: FC<TestListProps> = memo(({ tests }) => {
  return (
    <div className={styles.wrapper}>
      {tests.map((test) => (
        <TestItem key={test.id} test={test} />
      ))}
    </div>
  );
});
