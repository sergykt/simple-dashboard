import { type FC, memo } from 'react';
import { type TestWithSite } from '@/shared/model/types';
import styles from './TestList.module.scss';
import { TestItem } from './TestItem';

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
