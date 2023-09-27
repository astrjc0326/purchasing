const data = require('./dry_inventory.json')

const searchByName = (name) => {
  const res = [];
  for (let product of data['按庫存']) {
    if (product && (product['品名\nProduct Name_Chn'].includes(name.toLowerCase()) || product['品名\nProduct Name_Chn'].includes(name.toUpperCase()) )) {
      res.push(product)
    }
  }
  return res
}

const searchBySerial = (serial) => {
  const res = [];
  for (let product of data['按庫存']) {
    if (product && product['序號\nSerial'].includes(serial)) {
      res.push(product)
    }
  }
}

module.exports = { searchByName, searchBySerial }