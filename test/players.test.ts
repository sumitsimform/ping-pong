import app from './../src/app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Create User API Request', () => {
  it('should return response on call', () => {
    return chai.request(app).post('/api/v1/add-players')
    .send({
        "players" : ["Tony", "John"] 
    })
      .then(res => {
          expect(res).to.have.status(200);
      })
  })
})