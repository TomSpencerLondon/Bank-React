import React, {useState, useEffect} from 'react';
import { Statement } from '../interfaces/Statement';
import getStatement from '../api/getStatement';

const StatementDisplay = () => {
  const [statement, setStatement] =
    useState<Statement>({statementRecords: []});

  useEffect(() => {
    getStatement().then(setStatement);
  }, []);

  return (
    <table>
      <tbody>
      <tr>
        <td>
          Date
        </td>
        <td>
          Amount
        </td>
        <td>
          Balance
        </td>
      </tr>

      {statement.statementRecords.map((record) => {
        return (<tr key={`${record.date}-${record.amount}-${record.balance}`}>
          <td>{record.date}</td>
          <td>{record.amount}</td>
          <td>{record.balance}</td>
        </tr>)
      })
      }
      </tbody>
    </table>
  )
}
export default StatementDisplay
