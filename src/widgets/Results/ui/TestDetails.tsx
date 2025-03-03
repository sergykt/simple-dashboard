import { type FC } from 'react';
import classNames from 'classnames';
import { type TestWithSite } from '@/entities/tests';
import { TYPE_MAP, STATUS_MAP } from '@/shared/const';
import { Status } from '@/shared/model/types';
import { CircleChart } from '@/shared/ui/CircleChart';
import styles from './TestDetails.module.scss';

interface TestResultProps {
  test: TestWithSite;
}

export const TestDetails: FC<TestResultProps> = ({ test }) => {
  const { status, type, site } = test;

  const statusClass = classNames(styles.status, {
    [styles.draft]: status === Status.DRAFT,
    [styles.online]: status === Status.ONLINE,
    [styles.paused]: status === Status.PAUSED,
    [styles.stopped]: status === Status.STOPPED,
  });

  const percentA = Math.trunc(Math.random() * 100);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.site}>
          Site: <span>{site}</span>
        </div>
        <div className={styles.type}>
          Type: <span>{TYPE_MAP[type]}</span>
        </div>
        <div className={styles.status}>
          Status: <span className={statusClass}>{STATUS_MAP[status]}</span>
        </div>
      </div>
      <CircleChart percentA={percentA} className={styles.chart} />
    </div>
  );
};
