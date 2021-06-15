import React, {useState} from 'react';

interface StatementRecord {
  date: string,
  amount: number,
  balance: number
}

interface Statement {
  statementRecords: StatementRecord[]
}

const StatementDisplay = () => {
  const [statement, setStatement] =
    useState<Statement>({statementRecords: []});

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
      </tbody>
    </table>
  )
}
export default StatementDisplay
