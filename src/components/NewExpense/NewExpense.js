import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addClickHandler = () => {
    setIsAddExpenseOpen(!isAddExpenseOpen);
  };

  return (
    <div className="new-expense">
      {isAddExpenseOpen ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onAddExpense={addClickHandler}
        />
      ) : (
        <button onClick={addClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
