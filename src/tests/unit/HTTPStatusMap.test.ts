import { expect } from 'chai';
import HTTPStatusMap from '../../utils/HTTPStatusMap';

describe('HTTPStatusMap', () => {
  it('Should return the correct HTTP status code', () => {
    expect(HTTPStatusMap('SUCCESSFUL')).to.equal(200);
    expect(HTTPStatusMap('BAD_REQUEST')).to.equal(400);
    expect(HTTPStatusMap('UNAUTHORIZED')).to.equal(401);
    expect(HTTPStatusMap('NOT_FOUND')).to.equal(404);
    expect(HTTPStatusMap('CONFLICT')).to.equal(409);
    expect(HTTPStatusMap('UNKNOWN_STATUS')).to.equal(500);
  });
});
