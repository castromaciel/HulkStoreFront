import axios from 'axios';

export const buyCart = async ({items, token}) =>{
  console.log(items)

  return await axios.put(`http://localhost:8000/api/products/`, items,
  {headers:{'access-token': token}})
    .then(res => {
      const { status } = res;
      return status
    })
    .catch(error => {
      return error.response.status
    })
}