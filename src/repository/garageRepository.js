import databaseConfig from "../config/database/config.js"
import pg from "pg"

console.log(databaseConfig)

const pool = new pg.Pool(databaseConfig)


const saveGarageSO = async (garageSO) => {
  await pool.query(`INSERT INTO so (customer, service, price) VALUES ($1, $2, $3)`, [garageSO.customerName, garageSO.request, garageSO.price])
}

export default {
  saveGarageSO
}