import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../../app';
import VerifyService from '../../services/verifyService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /verify tests', () => {
  let verifyService: VerifyService;
  let getCombinationsStub: sinon.SinonStub;

  beforeEach(() => {
    verifyService = new VerifyService();
  });

  afterEach(() => {
    getCombinationsStub.restore();
  });

  it('Should return status 200 and the correct number of combinations', async () => {
    getCombinationsStub = sinon.stub(verifyService, 'verifyScore').resolves(
      { status: 'SUCCESSFUL', data: { combinations: 4 } },
    );
    const res = await chai.request(app).post('/verify').send({ score: '3x15' });
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal({ combinations: 4 });
  });

  it('Should return status 200 and the correct number of combinations', async () => {
    getCombinationsStub = sinon.stub(verifyService, 'verifyScore').resolves(
      { status: 'SUCCESSFUL', data: { combinations: 1 } },
    );
    const res = await chai.request(app).post('/verify').send({ score: '3x3' });
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal({ combinations: 1 });
  });

  it('Should return status 200 and the correct number of combinations', async () => {
    getCombinationsStub = sinon.stub(verifyService, 'verifyScore').resolves(
      { status: 'SUCCESSFUL', data: { combinations: 1 } },
    );
    const res = await chai.request(app).post('/verify').send({ score: '0x0' });
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal({ combinations: 1 });
  });
});
