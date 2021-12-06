import axios from "axios";

export const getAllProducts = async () =>{
  return await axios.get('http://localhost:8000/products/')
    .then(res => {
      const { data } = res;
      return data
    }
  )
}