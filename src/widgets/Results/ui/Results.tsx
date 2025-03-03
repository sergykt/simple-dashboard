import { useCallback, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetTest } from '@/entities/tests';
import { BackButton } from '@/shared/ui/BackButton';

import { APP_ROUTES } from '@/shared/const';
import { TestDetails } from './TestDetails';
import styles from './Results.module.scss';

export interface ResultsProps {
  id: number;
}

export const Results: FC<ResultsProps> = ({ id }) => {
  const test = useGetTest(id);
  const navigate = useNavigate();

  const handleBack = useCallback(async () => {
    await navigate(APP_ROUTES.HOME_PAGE);
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      {test?.name && <h2 className={styles.subtitle}>{test.name}</h2>}
      {test && <TestDetails test={test} />}
      <BackButton className={styles.backButton} onClick={handleBack} />
    </div>
  );
};
