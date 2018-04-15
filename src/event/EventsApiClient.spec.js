import { Pact } from '@pact-foundation/pact';
import path from 'path';
import axios from 'axios';

import EventsApiClient from './EventsApiClient';

const PACT_SERVER_PORT = 9000;
const PACT_SPEC_VERSION = 2;

const provider = new Pact({
  consumer: 'Izard Bets Web App',
  provider: 'Izard Bets Events API',
  port: PACT_SERVER_PORT,
  spec: PACT_SPEC_VERSION,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts')
});

beforeAll((done) => {
  return provider.setup().then(() => done());
})

afterAll((done) => {
  return provider.finalize().then(() => done());
})

const expectedBody = {
  "id": "5aa54833e9a92a2d140a9aa0",
  "homeTeamName": "Polska",
  "awayTeamName": "Senegal",
  "description": "faza grupowa, grupa H, kolejka 1",
  "date": "2018-06-19T15:00:29.722",
  "homeTeamScore": null,
  "awayTeamScore": null,
  "invitationCode": "clrZLdgR",
  "status": "CREATED",
  "createdAt": null,
  "lastUpdateAt": "2018-03-11T16:16:03.179",
  "version": "0",
  "bets": [
    {
      "who": "Zenek",
      "homeTeamScore": 1,
      "awayTeamScore": 2
    },
    {
      "who": "Tadek",
      "homeTeamScore": 0,
      "awayTeamScore": 2
    },
    {
      "who": "Mateusz U",
      "homeTeamScore": 1,
      "awayTeamScore": 1
    },
    {
      "who": "Sikor",
      "homeTeamScore": 1,
      "awayTeamScore": 0
    }
  ]
};

const api = new EventsApiClient(axios.create({
  baseURL: 'http://localhost:9000'
}));

describe('pact with events api', () => {
  describe('when call for event details', () => {
    beforeEach(() => {
      return provider.addInteraction({
        uponReceiving: 'a request for event details',
        withRequest: {
          method: 'GET',
          path: '/events/5aa54833e9a92a2d140a9aa0'
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: expectedBody
        }
      })
    })

    it('should return details in response', (done) => {
      return api.fetchEvent('5aa54833e9a92a2d140a9aa0')
        .then(response => {
          expect(response).toEqual(expectedBody)
          done()
        })
        .then(() => provider.verify());
    })
  })
});
