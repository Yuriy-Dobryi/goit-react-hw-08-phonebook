import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { AppBar } from './NavBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>

      <Main>
        <Container>
          <Section>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </Main>
    </>
  );
};

const Header = styled.header`
  padding: 20px 0;
  border-bottom: 5px solid #2a363b;
`;

const Main = styled.main`
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 60px;
`;