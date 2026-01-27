import './transaction.css'
import { TransactionTable } from '../components/TransactionTable';
export const Transaction = () => {
  const Transactions = [
    {
      transaction: "M495MN664",
      user: "sumit",
      email:"sumit.@gmail.com",
      amount: 94,
      suatus: "Active",
    },
   {
      transaction: "956NGMNLC",
      user: "sumit",
      email:"sumit.@gmail.com",
      amount: 94,
      suatus: "Active",
    },
   {
      transaction: "0483MNMF",
      user: "sumit",
      email:"sumit.@gmail.com",
      amount: 94,
      suatus: "Active",
    },

  ];
  return (
    <section className="transaction">
      <div className="round transactions">
            <TransactionTable data={Transactions} />
    </div>
    </section>
  )
}
