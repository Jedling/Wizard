interface ILoadingModeWheeledOrOddSizedModel {
  Id: number;
  Status: number;
  Selected: boolean;
}

export class LoadingModeWheeledOrOddSizedModel implements ILoadingModeWheeledOrOddSizedModel {
  public Id: number;
  public Status: number;
  public Selected: boolean;
  /**
   *
   */
  constructor(id: number = 0, status: number = 0, selected: boolean = false) {
    this.Id = id;
    this.Status = status;
    this.Selected = selected;
  }
}
