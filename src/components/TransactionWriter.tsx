import React from 'react';
const TransactionWriter = () => {
  return (
    <form>
      <label>
        Amount
        <input type="text" name="amount" />
      </label>
      <input type="submit" value="Deposit" />
      <input type="submit" value="Withdraw" />
    </form>
  )
}
export default TransactionWriter
