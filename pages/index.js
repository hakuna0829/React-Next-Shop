import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage';
import MobileSection from '../components/MobileSection';
import CustomerSupport from '../components/CustomerSupport';
import BestOffer from '../components/BestOffer';
import Partners from '../components/Partners';
import Subscription from '../components/Subscription';

export default () => {
  return (
    <Layout title={ 'Home' }>
      
    <HeroImage></HeroImage>
    <MobileSection></MobileSection>
	
    <CustomerSupport></CustomerSupport>
    <BestOffer></BestOffer>
    <Partners></Partners>
    <Subscription></Subscription>
 
    </Layout>
  );
}
