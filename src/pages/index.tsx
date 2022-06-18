import React, {useState} from 'react';
import Layout from '../components/Layout'
import TransactionWriter from '../components/TransactionWriter';
import StatementDisplay from "../components/StatementDisplay";

const AccountPage = () => {
  const [updated, setUpdated] = useState<boolean>(false);

  return (
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="flex">
          <StatementDisplay updated={updated} setUpdated={setUpdated} />
          <TransactionWriter updated={updated} setUpdated={setUpdated}/>
        </div>
      </Layout>
  )}

export default AccountPage
