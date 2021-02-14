import React from 'react';
import './assets/style/Common.scss';
import styles from 'styled-components';

const Container = styles.div`
  align-items: center;
  background: #ff512f;
  background: -webkit-linear-gradient(to right, #ff512f, #f09819);
  background: linear-gradient(to right, #ff512f, #f09819);
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => (
  <Container><p className="slogon">hello world</p></Container>
);

export default App;
