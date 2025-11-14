import axios from 'axios';

axios.create({
   baseURL: 'https://api.rawg.io/api/games',
   params: {
      key: 'c7b18323a47d40c394ea5b019646b1f5',
   },
   timeout: 1000,
   headers: { 'X-Custom-Header': 'foobar' },
});
