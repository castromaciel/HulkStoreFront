import axios from "axios";

export const getAllProducts = async (token) =>{
  return await axios.get('http://localhost:8000/api/products/', 
  {headers: {'access-token': token}})
    .then(res => {
      const { data } = res;
      return data
    }
  ).catch(err => {
    return err
  })
}