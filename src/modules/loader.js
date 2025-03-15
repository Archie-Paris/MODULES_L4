const axios = require('axios');

module.exports = async function loader(url) {
  let result = { data: [], isLoading: true, error: null };
  try {
    const dataM = await axios.get(url);
    result.data = dataM.data;
  } catch (err) {
    result.error = err.message;
  } finally {
    result.isLoading = false;
  }
  return result;
};