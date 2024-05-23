import IScore from './IScore';
import ICombinations from './ICombinations';
import { ServiceResponse } from './IServiceResponse';

export default interface IVerifyService {
  verifyScore(score: IScore): ServiceResponse<ICombinations>;
}
