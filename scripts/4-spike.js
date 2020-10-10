import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 100 }, // below normal load
    { duration: '10s', target: 100 },
    { duration: '10s', target: 500 }, // spike to 1000 users
    { duration: '10s', target: 500 }, // stay at 1000 for 30 minutes
    { duration: '10s', target: 100 }, // scale down. Recovery stage.
    { duration: '10s', target: 100 },
    { duration: '10s', target: 0 },
  ],
};
export default function () {
  const BASE_URL = 'https://test-api.k6.io'; // make sure this is not production

  http.batch([
    [
      'GET',
      `${BASE_URL}/public/crocodiles/1/`,
      null,
      { tags: { name: 'PublicCrocs' } },
    ],
    [
      'GET',
      `${BASE_URL}/public/crocodiles/2/`,
      null,
      { tags: { name: 'PublicCrocs' } },
    ],
    [
      'GET',
      `${BASE_URL}/public/crocodiles/3/`,
      null,
      { tags: { name: 'PublicCrocs' } },
    ],
    [
      'GET',
      `${BASE_URL}/public/crocodiles/4/`,
      null,
      { tags: { name: 'PublicCrocs' } },
    ],
  ]);

  sleep(1);
}