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
      </tbody>
    </table>
  )
}
export default StatementDisplay
