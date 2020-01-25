interface IDmodeAdditionalClausesModel {
  Id: number;
  Rate: number;
}

export class DmodeAdditionalClausesModel implements IDmodeAdditionalClausesModel {
  public Id: number;
  public Rate: number;
  /**
   *
   */
  constructor(id: number = 0,
              rate: number = 0) {
    this.Id = id;
    this.Rate = rate;
  }
}

