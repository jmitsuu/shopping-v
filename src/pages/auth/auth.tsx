import { Outlet } from 'react-router-dom';
import { Container } from '../layouts/container';

export function Auth() {
  return (
    <section className="min-h-screen">
      <Container>
        <Outlet />
      </Container>
    </section>
  );
}
