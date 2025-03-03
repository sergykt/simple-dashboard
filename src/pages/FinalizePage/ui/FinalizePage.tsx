import { Navigate, useParams } from 'react-router-dom';
import { Finalize } from '@/widgets/Finalize';
import { Container } from '@/shared/ui/Container';
import { PageTitle } from '@/shared/ui/PageTitle';
import { APP_ROUTES } from '@/shared/const';
import { isValidId } from '@/shared/lib/isValidId';
import styles from './FinalizePage.module.scss';

const FinalizePage = () => {
  const params = useParams();
  const id = Number(params.id);

  if (!isValidId(id)) {
    return <Navigate to={APP_ROUTES.HOME_PAGE} replace />;
  }

  return (
    <Container className={styles.wrapper}>
      <PageTitle title='Finalize' />
      <Finalize id={id} />
    </Container>
  );
};

export default FinalizePage;
