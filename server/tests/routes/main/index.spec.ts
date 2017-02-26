process.env.NODE_ENV = 'testing';

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../../../';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Main API', function (): void {
    it('should returnt \'Hello World\'', (done: Function): void => {
        chai.request(app)
            .get('/api/')
            .set('content-type', 'application/json')
            .end((err: Error, res: any): void => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.message).to.be.equal('Hello World');
                done();
            });
    });
});
