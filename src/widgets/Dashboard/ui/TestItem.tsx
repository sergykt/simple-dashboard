import { type FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { type TestWithSite } from '@/entities/tests';
import { Button } from '@/shared/ui/Button';
import { type LocationState, Status } from '@/shared/model/types';
import { APP_ROUTES, STATUS_MAP, TYPE_MAP } from '@/shared/const';
import styles from './TestItem.module.scss';

interface TestItemProps {
  test: TestWithSite;
}

export const TestItem: FC<TestItemProps> = memo(({ test }) => {
  const { site, name, type, status, id } = test;
  const navigate = useNavigate();
  const location = useLocation();

  const statusClass = classNames(styles.status, {
    [styles.draft]: status === Status.DRAFT,
    [styles.online]: status === Status.ONLINE,
    [styles.paused]: status === Status.PAUSED,
    [styles.stopped]: status === Status.STOPPED,
  });

  const locationState: LocationState = {
    from: `${location.pathname}${location.search}`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{name}</div>
      <div className={styles.type}>{TYPE_MAP[type]}</div>
      <div className={statusClass}>{STATUS_MAP[status]}</div>
      <div className={styles.site}>{site}</div>
      {status !== Status.DRAFT ? (
        <Button
          className={styles.button}
          onClick={() =>
            navigate(APP_ROUTES.RESULTS(id), {
              state: locationState,
            })
          }
        >
          Results
        </Button>
      ) : (
        <Button
          className={styles.button}
          variant='secondary'
          onClick={() => navigate(APP_ROUTES.FINALIZE(id), { state: locationState })}
        >
          Finalize
        </Button>
      )}
    </div>
  );
});
