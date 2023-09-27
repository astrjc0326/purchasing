import React, {useState, useRef} from 'react';
import axios from 'axios';
import DropDown from './DropDown.js'

const Searchbar = ({setOrders}) => {
  const [dropDowns, setDropDowns] = useState([]);
  const inputSerial = useRef();
  const inputCode = useRef();
  const inputProductName = useRef();
  const inputAmount = useRef();
  const inputUnit = useRef();
  const handleProductNameInput = (name) => {
    axios.get(`/${name.current.value}`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setDropDowns(response.data)
        }
      })
      .catch
  }
  const dropdown = dropDowns?.map(data => (
      <DropDown data={data} inputSerial={inputSerial} inputCode={inputCode} inputProductName={inputProductName} setDropDowns={setDropDowns}/>
  ))
  return (
    <div>
      <table>
        <thead>
          <tr>
      <th><input placeholder="Serial" ref={inputSerial}></input></th>
      <th><input placeholder="BarCode" ref={inputCode}></input></th>
      <th><input placeholder="Product Name" ref={inputProductName} onChange={
        () => {
          handleProductNameInput(inputProductName)
        }
      }></input></th>
      <th><input placeholder="Amount" ref={inputAmount}></input></th>
      <th><select ref={inputUnit}>
        <option value="case">case</option>
        <option value="unit">unit</option>
      </select>
      </th>
      <th><button onClick={() => {
        let serial = inputSerial.current.value;
        let code = inputCode.current.value;
        let name = inputProductName.current.value;
        let amount = inputAmount.current.value;
        let unit = inputUnit.current.value
        const order = {serial, code, name, amount, unit};
        if (!amount) {
          window.alert('No amount');
          return;
        }
        setOrders(prev => [...prev, order]);
        inputSerial.current.value = null;
        inputCode.current.value = null;
        inputProductName.current.value = null;
        inputAmount.current.value = null;
        inputUnit.current.value = "case"
      }}>Add</button>
      </th>
      </tr>
      </thead>
      <tbody>
        {dropdown}
      </tbody>
      </table>
    </div>
  )
}

export default Searchbar