import axios from 'axios'

export const signUp = async ({username, email, password}) =>{
  return await axios.post('http://localhost:8000/api/auth/signup', {username, email, password})
    .then((response) => {
      const { data } = response;
      return data
    })
    .catch((error) => {
      return error.response.data
    })
}

