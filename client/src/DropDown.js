import React from 'react';

const DropDown = ({data, inputSerial, inputCode, inputProductName, setDropDowns}) => {
  const handleOnClick = (data) => {
    inputSerial.current.value = data['序號\nSerial'];
    inputCode.current.value = data['產品條碼\nProduct Barcode']
    inputProductName.current.value = data['品名\nProduct Name_Chn']
    setDropDowns([])
  }
 return (
  <tr key={data['序號\nSerial']} className='product' onClick={() => {
    handleOnClick(data)
  }}>
    <td>
      {data['序號\nSerial']}
    </td>
    <td>{data['產品條碼\nProduct Barcode']}</td>
    <td>{data['品名\nProduct Name_Chn']}</td>
    <td>{data['箱入數 Pack per Case']}</td>

  </tr>
  )
}

export default DropDown