import React from 'react';
import './MobileReceipt.css';

function MobileReceipt({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default MobileReceipt;
