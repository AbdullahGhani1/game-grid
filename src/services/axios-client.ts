import axios from 'axios';

axios.create({
   baseURL: 'https://api.example.com',
   params: {
      key: '',
   },
   timeout: 1000,
   headers: { 'X-Custom-Header': 'foobar' },
});
