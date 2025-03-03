import { FC, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetTest } from '@/entities/tests';
import { BackButton } from '@/shared/ui/BackButton';
import { APP_ROUTES } from '@/shared/const';
import { LocationState } from '@/shared/model/types';
import { DraftDetails } from './DraftDetails';
import styles from './Finalize.module.scss';

interface FinalizeProps {
  id: number;
}

export const Finalize: FC<FinalizeProps> = ({ id }) => {
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
      {test && <DraftDetails test={test} />}
      <BackButton className={styles.backButton} onClick={handleBack} />
    </div>
  );
};
