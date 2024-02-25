const { Pool } = require('pg')
require("dotenv").config();
const config = require("./../utils/config")

const connectionString  = config.URI;

const pool = new Pool({
  connectionString,
});

module.exports = { 
  query: async (query, params) => {
    const response = {};
    let client;

    try {
      client = await pool.connect();
      const result = await client.query(query, params);
      if (result.rows) {
        response.rows = result.rows;
      }
    } catch (e) {
      console.log(e);
      response.error = e;
    } finally {
      try {
        await client.release();
      } catch (e) {
        console.log(e);
      }
    }

    return response;
  }
}
