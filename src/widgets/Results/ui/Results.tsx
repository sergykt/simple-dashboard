import { useCallback, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetTest } from '@/entities/tests';
import { BackButton } from '@/shared/ui/BackButton';
import { type LocationState } from '@/shared/model/types';
import { APP_ROUTES } from '@/shared/const';
import { TestDetails } from './TestDetails';
import styles from './Results.module.scss';

export interface ResultsProps {
  id: number;
}

export const Results: FC<ResultsProps> = ({ id }) => {
  const test = useGetTest(id);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = useCallback(async () => {
    const state = location.state as LocationState | undefined;
    const prevUrl = state ? state.from : APP_ROUTES.HOME_PAGE;
    await navigate(prevUrl);
  }, [navigate, location]);

  return (
    <div className={styles.wrapper}>
      {test?.name && <h2 className={styles.subtitle}>{test.name}</h2>}
      {test && <TestDetails test={test} />}
      <BackButton className={styles.backButton} onClick={handleBack} />
    </div>
  );
};
