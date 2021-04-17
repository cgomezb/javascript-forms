const url = 'https://reqres.in/api/users';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'New User'
  })
}

fetch(url, options)
  .then(res => {
    if (res.ok) {
      console.log('Success');
      res.json();
    } else {
      console.log('Not Successful');
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error has ocurred'));