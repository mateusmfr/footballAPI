import IScore from '../interfaces/IScore';
import ICombinations from '../interfaces/ICombinations';
import IVerifyService from '../interfaces/IVerifyService';
import { ServiceResponse } from '../interfaces/IServiceResponse';
import combinationsCalculator from '../utils/combinationsCalculator';

export default class VerifyService implements IVerifyService {
  private response: ICombinations = { combinations: 0 };

  verifyScore(scoreString: IScore): ServiceResponse<ICombinations> {
    const [pointsTeamA, pointsTeamB] = scoreString.score.split('x').map(Number);
    const combinationsTeamA = combinationsCalculator(pointsTeamA);
    const combinationsTeamB = combinationsCalculator(pointsTeamB);
    this.response.combinations = combinationsTeamA * combinationsTeamB;
    return ({ status: 'SUCCESSFUL', data: this.response });
  }
}
