import axios from 'axios'

export const postData = (body) => {

axios.post("http://localhost:3100/auth/register",body)

.then(function (response) {
    console.log(response);
    })
.catch(function (error) {
  console.log(error);
});
}
