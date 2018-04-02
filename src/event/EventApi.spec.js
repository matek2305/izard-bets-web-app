import Pact from 'pact';
import path from 'path';

import * as api from './EventApi';

const PACT_SERVER_PORT = 9000;
const PACT_SPEC_VERSION = 2;

const provider = Pact({
  consumer: 'Izard Bets Web App',
  provider: 'Izard Bets Events API',
  port: PACT_SERVER_PORT,
  spec: PACT_SPEC_VERSION,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts')
});

const expectedResult = {
  id: '5aa54833e9a92a2d140a9aa0',
  homeTeamName: 'Polska',
  awayTeamName: 'Senegal',
  date: '2018-06-19T15:00:00'
};

describe('pact with events api', () => {
  beforeAll(() => {
    return provider.setup();
  })

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
          body: expectedResult
        }
      })
    })

    it('should return details in response', async () => {
      const details = await api.fetchEvent('5aa54833e9a92a2d140a9aa0');
      expect(details).toEqual(expectedResult);
      await provider.verify();
    })
  })

  afterAll(() => {
    return provider.finalize();
  })
});
