import axios from 'axios';

const options = {
    method: 'POST',
    url: 'https://api.aivideoapi.com/runway/generate/text',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: '178c720f6311f48468ab3f2e8e2d6c574'
    },
    data: {
        text_prompt:
            'Cinematic, creative, engaging, and concise comedy show. An ${prompt}, with a light and ${tone} tone, suitable for specific audience as ${ageGroup}, ${theme}, should be entertaining from start to finish',
        model: 'gen2',
        width: 1344,
        height: 768,
        motion: 5,
        seed: 0,
        callback_url: '',
        time: 5 //${time}
    },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });


// //   a28b88db3fce4c8296d3e8e1a41bc40d

// import axios from 'axios';

// const options = {
//   method: 'POST',
//   headers: {
//     'x-api-key': 'a28b88db3fce4c8296d3e8e1a41bc40d',
//     'Content-Type': 'application/json'
//   },
//   data: {
//     replica_id: 'r79e1c033f',
//     script: 'Once upon a time, Bob, a clumsy adventurer, decided to explore the infamous Cave of Doom. His first heroic act? Tripping over his own shoelaces at the entrance. Undeterred, Bob pressed on, armed with a map… upside down. He bravely followed the wrong path and found himself in a broom closet, where he mistook a mop for a dragon. With a battle cry, he "slayed" the mop, only to realize his grand victory was witnessed by a janitor. Bob fled, vowing never to speak of his "dragon-slaying" again. The cave was never conquered, but the mop? Forever vanquished.',
//     video_name: 'Unfortunate Adventurer',
//     background_url: ''
//   }
// };

// axios('https://tavusapi.com/v2/videos', options)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(err => {
//     console.error(err);
//   });
