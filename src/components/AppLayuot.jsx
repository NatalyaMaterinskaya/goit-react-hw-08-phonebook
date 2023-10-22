import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from './Navigation/Navigation';
import { Loader } from './Loader/Loader';
import { Container } from './Container/Container';


export const AppLayuot = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
