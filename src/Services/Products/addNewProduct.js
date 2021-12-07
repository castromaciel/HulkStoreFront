import axios from "axios";

export const addNewProduct = async ({name, price, imgURL, stock, token} ) =>{
  console.log(token)
  return await axios.post('http://localhost:8000/api/products/', 
  {name, price, imgURL, stock},
  {headers:{'access-token': token}})
    .then(res => {
      const { data } = res;
      return data
    })
    .catch(error => {
      return error.response.data
    })
}