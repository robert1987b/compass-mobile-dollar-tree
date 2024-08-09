import React from 'react';
import './MobileExpenseList.css';

function MobileExpenseList({ expenses }) {
  return (
    <div className="list-container">
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileExpenseList;
