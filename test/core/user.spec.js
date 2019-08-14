import { expect } from 'chai';

import user from '../../src/core/user'

describe('user', () => {

    it('api/register', async () => {

      let response = await user.register('event', 'context');  
      expect(response.status).to.equal(200);
      expect(response.body).to.contain('userId');
      expect(response.body).to.contain('token');
    })

    it('api/qr-code', async () => {

      let response = await user.qrCode('event', 'context');  
      expect(response.status).to.equal(200);
      expect(response.body).to.contain('data');
    })

})

