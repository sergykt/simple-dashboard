import { Navigate, useParams } from 'react-router-dom';
import { Results } from '@/widgets/Results';
import { Container } from '@/shared/ui/Container';
import { PageTitle } from '@/shared/ui/PageTitle';
import { APP_ROUTES } from '@/shared/const';
import { isValidId } from '@/shared/lib/isValidId';
import styles from './ResultPage.module.scss';

const ResultPage = () => {
  const params = useParams();
  const id = Number(params.id);

  if (!isValidId(id)) {
    return <Navigate to={APP_ROUTES.HOME_PAGE} replace />;
  }

  return (
    <Container className={styles.wrapper}>
      <PageTitle title='Results' />
      <Results id={id} />
    </Container>
  );
};

export default ResultPage;
