import axios from 'axios'

export const postData = (url,body) => {

axios.post(url,body)
.then(function (response) {
    console.log(response);
    })
.catch(function (error) {
  console.log(error);
});
}
