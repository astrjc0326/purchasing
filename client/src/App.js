import React, {useState} from 'react'
import Searchbar from './Searchbar.js';
import Orders from './Orders.js'
// const orders = [{code: 471042071683, name:'每朝雙纖綠茶', amount:1, unit:'箱'}]
const App = () => {
  const [orders, setOrders] = useState([{serial: 1111, code: 471042071683, name:'每朝雙纖綠茶', amount:1, unit:'箱', amountOnClick: false}])
  const deleteOnClick = (code) => {
    setOrders(items => items.filter((order) => order.code !== code))
  }
  const adjustAmountOnClick = (code, amount) => {
    setOrders(items => items.map((order) => {
      if (order.code === code) {
        order.amount = amount
      }
    }))
  }
  return (
    <div className="main">
      <div className="div-logo">
        <img id="logo" src="https://itaiwanfoods.com/wp-content/uploads/Logo.png.webp"/>
      </div>
      <Searchbar setOrders={setOrders}/>
      <Orders orders={orders} deleteOnClick={deleteOnClick} adjustAmountOnClick={adjustAmountOnClick}/>
    </div>
  )
};

export default App;
