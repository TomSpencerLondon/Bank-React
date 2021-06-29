import React, {useState} from 'react';
import postTransaction from "../api/postTransaction";
import "setimmediate";


const TransactionWriter = () => {
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("");


  const depositTransaction = () => {
    postTransaction({action: "DEPOSIT", amount} );
  }

  const withdrawTransaction = () => {
    postTransaction({action: "WITHDRAW", amount} );
  }


  const handleSubmit = (e: any) => {
    e.preventDefault();
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
        name="deposit"
        onClick={() => {
          depositTransaction();
        }}
      >
        Deposit
      </button>
      <button
        name="withdraw"
        onClick={() => {
          withdrawTransaction();
        }}
        >
        Withdraw
      </button>
    </form>
  )
}
export default TransactionWriter

