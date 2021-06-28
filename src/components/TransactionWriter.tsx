import React, {useState} from 'react';
import postStatement from "../api/postStatement";
import "setimmediate";
const TransactionWriter = () => {
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("");

  const handleSubmit = (event: any) => {
    postStatement({action, amount} );
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount
        <input
          type="text"
          value={amount}
          onChange={e => {
            setAmount(e.target.value);
          }}
          name="amount" />
      </label>
      <button
        type="submit"
        name="deposit"
        onClick={() => {
          setAction("deposit");
        }}
      >
        Deposit
      </button>
      <button
        type="submit"
        name="withdraw"
        onClick={() => {
          setAction("withdraw");
        }}
        >
        Withdraw
      </button>
    </form>
  )
}
export default TransactionWriter

