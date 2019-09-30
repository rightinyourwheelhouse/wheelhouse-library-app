import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import { Disclaimer, Hero, InnerContainer } from './landingPage.styles';

const LandingPage = () => (
  <Hero>
    <InnerContainer>
      <h1>Wheelhouse Library</h1>
      <p>
        Who rented what? Who sucks at reading? Who to publicly shame? Get
        started!
      </p>

      <Button color="primary">
        <Link to="/overview">View all the books</Link>
      </Button>

      <Disclaimer>
        Made with
        <span role="img" aria-label="love">
          ❤️
        </span>
        at
        <strong> Wheelhouse Agency</strong>
      </Disclaimer>
    </InnerContainer>
  </Hero>
);

export default memo(LandingPage);
