import axios from "axios";

export const signIn = async ({email, password}) =>{
  return await axios.post('http://localhost:8000/api/auth/signin', {email, password})
    .then(res => {
      const { data } = res;
      return data
    })
    .catch(err => {
      return err
    })
}