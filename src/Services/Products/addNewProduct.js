import axios from "axios";

export const addNewProduct = async ({name, price, imgURL, stock}) =>{
  return await axios.post('http://localhost:8000/products/', {name, price, imgURL, stock})
    .then(res => {
      const { data } = res;
      return data
    }
  )
}