import React from 'react';
import axio from 'axios';
import OrderEntry from './OrderEntry.js';

const Orders = ({orders, deleteOnClick, adjustAmountOnClick}) => {
  const allOrders = (orders.map(order => (
    <tbody>
      <OrderEntry order={order} deleteOnClick={deleteOnClick} adjustAmountOnClick={adjustAmountOnClick}/>
    </tbody>
  )))
  return (
    <table>
      <thead>
      <tr>
        <th>Serial</th>
        <th>Bar Code</th>
        <th>Product Name</th>
        <th>Amount</th>
        <th>BarCode</th>
        <th>Adjust</th>
        <th>Delete</th>
        <th>Order</th>
      </tr>
      </thead>
      {allOrders}
    </table>
  )
}

export default Orders;

