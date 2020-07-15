import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <b>Amount:</b> {amount}<br />
      <b>Created at:</b> {createdAt}<br />
      <br /><br />
    </div>
  );

export default ExpenseListItem;