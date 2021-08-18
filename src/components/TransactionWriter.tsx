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
    setAmount("");
    e.preventDefault();
  }

  return (
    <div className="w-1/2 bg-green-100 grid justify-items-start my-20">
    <form className="justify-self-center" onSubmit={handleSubmit}>
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
    </div>
  )
}
export default TransactionWriter

