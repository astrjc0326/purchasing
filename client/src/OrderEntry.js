import React, {useState} from 'react';

const OrderEntry = ({ order, deleteOnClick, adjustAmountOnClick}) => {
  const [adjustOnClick, setAdjustOnClick] = useState(false)
  const [value, setValue] = useState(order?.amount)
  const adjustAmount = (<input value={value} onChange={(e) => {setValue(e.target.value)}}></input>)
  return (
    <tr key={order.serial.toString()}>
        <th>{order?.serial}</th>
        <th>{order?.code}</th>
        <th>{order?.name}</th>
        <th>{adjustOnClick ? adjustAmount : `${order?.amount} ${order.unit}`}</th>
        <th>
          BarCode
        </th>
        <th>
          <button onClick={() => {
            if (!adjustOnClick) {
              setAdjustOnClick(true)
            } else {
              setAdjustOnClick(false)
              adjustAmountOnClick(order.code, value)
            }
          }
            // () => {
            // setText(<input value={order.amount}></input>)
            // adjustOnClick(order.code)}
          }
            >Adjust</button>
        </th>
        <th>
          <button onClick={() => {deleteOnClick(order.code)}}>Delete</button>
        </th>
        <th>
          <input type="checkbox"></input>
          <label></label>
        </th>
    </tr>
  )
}

export default OrderEntry