import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from 'src/graphql/query/users';
import { Chart } from 'src/types/chart';
import { Component } from 'src/types/component';
import { User } from 'src/types/user';
import { ChartsFactory } from 'src/components/charts-factory';
import { users, UsersInput, UsersParametric } from 'src/codec/users';

interface TopImagesProps extends Component {
  chart: Chart;
}

const TopImages: React.FC<TopImagesProps> = ({ chart, id }) => {
  window.console.log(id, 'id');
  window.console.log(chart, 'chart');

  const { data } = useQuery<{ users: { data: User[] } }>(GET_USERS);

  window.console.log(data, 'data');

  return <ChartsFactory<UsersParametric, UsersParametric, UsersInput> chart={chart} codec={users} data={data} />;
};

export default TopImages;
