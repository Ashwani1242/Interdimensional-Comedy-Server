import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.aivideoapi.com/status?uuid=df12b89f-aff4-443a-a6a3-e7974998a94a',
  headers: {accept: 'application/json', Authorization: '178c720f6311f48468ab3f2e8e2d6c574'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });




// //   {
// //     status: 'Task is in queue',
// //     uuid: '5c29105e-bd20-4665-8dc6-24aaa83deffd'
// //   }


// import axios from 'axios';

// const options = {
//   method: 'GET',
//   headers: {
//     'x-api-key': 'a28b88db3fce4c8296d3e8e1a41bc40d'
//   }
// };

// axios('https://tavusapi.com/v2/videos/515fd53c17', options)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(err => {
//     console.error(err);
//   });
