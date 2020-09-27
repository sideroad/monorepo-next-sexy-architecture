import React, { FC } from 'react';
import User from 'components/User';
import Head from 'components/Head';
import Nav from 'components/Nav';
import { fetchUser, UserGetRS, useUser } from 'fetchers/user';
import { useRouter } from 'next/router';

interface Props {
  user?: UserGetRS;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const user = await fetchUser({ id: params.id });
    return { props: { user } };
  } catch (error) {
    return { props: {} };
  }
}

export default function UserPage(props: Props) {
  const router = useRouter();
  const { data, error } = useUser({ id: String(router.query.id) }, props.user);
  return (
    <>
      <Head />
      <Nav />
      {data ? <User {...data} /> : null}
    </>
  );
}
