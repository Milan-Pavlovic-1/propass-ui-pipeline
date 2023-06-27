import React from 'react';
import Tabs from '../../Components/Tabs/Tabs';
import FlightPass  from '../FlightPass/FlightPass';
import Packges from '../Packges/Packges';
import Redeem from '../Redeem/Redeem';
import {Container , MainContainer} from './styles'
const App = () => {
  const tabs = [
    {
      title: 'Create your own flight pass',
      component: <FlightPass />,
    },
    {
      title: 'Customized Packages',
      component: <Packges />,
    },
    {
      title: 'Redeem your flight Pass',
      component: <Redeem />,
    },
  ];

  return (
      <Container>
        <MainContainer>
          <Tabs tabs={tabs} />
        </MainContainer>
      </Container>
  );
};

export default App;
