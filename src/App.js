import React from 'react';
import './assets/scss/styles.scss';
import Layout from './components/Layout/Layout';
import TacoBuilder from './containers/TacoBuilder/TacoBuilder';

function App() {
  return (
        <Layout>
            <TacoBuilder />
        </Layout>
  );
}

export default App;
