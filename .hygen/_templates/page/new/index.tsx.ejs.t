---
to: pages/<%= name %>.tsx
---
import React from 'react';
import { connect } from 'react-redux';
import { NP } from 'types/next';
import User from 'components/user';

interface Props {
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

const <%= Name %>: NP<Props> = (props: Props) => {
  return (
    <>
      <User {...props.user} />
    </>
  );
};

<%= Name %>.getInitialProps = async ({ fetcher, query }) => {
  await fetcher.user.get({
    id: query.id
  });
  return {};
};

export default connect(state => ({
  user: state.user.item
}))(<%= Name %>);
