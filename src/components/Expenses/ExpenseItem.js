import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">₺{props.expense.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
