import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout'
import TransactionWriter from '../components/TransactionWriter';
import StatementDisplay from "../components/StatementDisplay";
import {useQuery} from "react-query";
import getStatement from "../api/getStatement";

const AccountPage = () => {
  const { data: statement = {statementRecords: []}, refetch } =
      useQuery('getStatement', getStatement, {
        enabled: false
      });

  const handleClick = () => {
    refetch();
  };

  return (
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="flex">
          <StatementDisplay {...statement} />
          <TransactionWriter handleClick={handleClick} />
        </div>
      </Layout>
  )}

export default AccountPage
