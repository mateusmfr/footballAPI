import { expect } from 'chai';
import sinon from 'sinon';
import App from '../../app';

describe('App', () => {
  let app: App;
  let listenStub: sinon.SinonStub;

  beforeEach(() => {
    app = new App();
    listenStub = sinon.stub(app.app, 'listen');
  });

  afterEach(() => {
    listenStub.restore();
  });

  it('Should call listen with the correct port when start is called', () => {
    const port = 3000;
    app.start(port);
    expect(listenStub.calledWith(port)).to.be.true;
  });
});
