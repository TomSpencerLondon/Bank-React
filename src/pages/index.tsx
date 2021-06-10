import React from 'react';
import Layout from '../components/Layout'
import TransactionWriter from '../components/TransactionWriter';
import TransactionDisplay from "../components/TransactionDisplay";

const AccountPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <TransactionWriter />
    <TransactionDisplay />
  </Layout>
)

export default AccountPage
