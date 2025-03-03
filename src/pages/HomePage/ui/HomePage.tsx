import { Dashboard } from '@/widgets/Dashboard';
import { Container } from '@/shared/ui/Container';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Container className={styles.wrapper}>
      <PageTitle title='Dashboard' className={styles.title} />
      <Dashboard />
    </Container>
  );
};

export default HomePage;
