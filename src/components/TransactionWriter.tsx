import React from 'react';
const TransactionWriter = () => {
  return (
    <form>
      <label>
        Amount
        <input type="text" name="amount" />
      </label>
      <input type="submit" value="Deposit" />
    </form>
  )
}
export default TransactionWriter
