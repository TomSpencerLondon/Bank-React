import React, {useState, useEffect} from 'react';
import { Statement } from '../interfaces/Statement';
import getStatement from '../api/getStatement';
import {useQuery} from "react-query";

const StatementDisplay = () => {

  const { data: statement = {statementRecords: []} } =
    useQuery('getStatement', getStatement, {
      refetchInterval: 100
    })

  return (
    <div className="w-1/2 h-12 bg-gray-200 rounded-lg">
    <table className="table-fixed">
      <thead>
      <tr>
        <th className="w-1/2">Date</th>
        <th className="w-1/4">Amount</th>
        <th className="w-1/4">Balance</th>
      </tr>
      </thead>
      <tbody>
      {statement.statementRecords.map((record) => {
        return (<tr className="table-row" key={`${record.date}-${record.amount}-${record.balance}`}>
          <td>{record.date}</td>
          <td>{record.amount}</td>
          <td>{record.balance}</td>
        </tr>)
      })
      }
    </tbody>
    </table>
    </div>
  )
}
export default StatementDisplay
