import { Dashboard } from '@/widgets/Dashboard';
import { Container } from '@/shared/ui/Container';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';

const HomePage = () => {
  return (
    <Container>
      <PageTitle title='Dashboard' />
      <Dashboard />
    </Container>
  );
};

export default HomePage;
