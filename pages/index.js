import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';

export default () => {
  return (
    <Layout title={ 'Home' }>
      <div className='container'>
        <div className='jumbotron'>
          <h1>Landing Page</h1>
          <p>
            <Link href='/login'><a className='btn btn-primary btn-lg' role='button'>Log In</a></Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
