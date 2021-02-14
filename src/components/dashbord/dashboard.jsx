import React, { useEffect } from 'react';
import '../../assets/style/dashboard.scss';
import gql from 'graphql-tag';
import { to } from 'await-to-js';
import { Card } from './card';
import { LeftSideBar } from './leftSideBar';
import apolloClient from '../../utils/apolloClient';

const Dashboard = () => {
  useEffect(async () => {
    const [, data] = await to(apolloClient.query({
      context: {
        headers: {
          'Prismic-ref': 'YCUGMBMAACEAFO0O',
        },
      },
      query: gql`
        query qwe {
          allDynamic_pages {
            edges {
              node {
                title
                content
                _linkType
              }
            }
          }
        }
      `,
    }));

    console.log(data);
  }, []);

  return (
    <div className="dashboard">
      <LeftSideBar />
      <main className="content-area">
        <section className="graph-card-section">
          <Card />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
