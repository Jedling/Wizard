interface ILoadingModeWheeledOrOddSizedType {
  Id: number;
  Rate: number;
}

export class LoadingModeWheeledOrOddSizedType implements ILoadingModeWheeledOrOddSizedType {
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
