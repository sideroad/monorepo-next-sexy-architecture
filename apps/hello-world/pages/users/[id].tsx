import React from 'react';
import { connect } from 'react-redux';
import { NP } from '../../../../types/next';
import User from '../../components/user';
import Head from '../../components/head';
import Nav from '../../components/nav';

interface Props {
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

const UserPage: NP<Props> = (props: Props) => {
  return (
    <>
      <Head />
      <Nav />
      <User {...props.user} />
    </>
  );
};

UserPage.getInitialProps = async ({ fetcher, query }) => {
  await fetcher.user.get({
    id: query.id
  });
  return {};
};

export default connect(state => ({
  user: state.user.item
}))(UserPage);
