import axios from "axios";

export const getProductsToCart = async ({token, _id}) =>{
  return await axios.get(`http://localhost:8000/api/users/${_id}`, 
  {headers: {'access-token': token}})
    .then(res => {
      const { data } = res;
      console.log(data.cart)
      return data.cart
    }
  ).catch(err => {
    return err
  })
}