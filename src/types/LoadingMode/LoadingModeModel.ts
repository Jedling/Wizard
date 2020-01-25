interface ILoadingModeModel {
  Id: number;
  Name: string;
  Description: string;
  Selected: boolean;
}

export class LoadingModeModel implements ILoadingModeModel {
  public Id: number;
  public Name: string;
  public Description: string;
  public Selected: boolean;
  /**
   *
   */
  constructor(id: number = 0, name: string = '', description: string = '', selected: boolean = false) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Selected = selected;
  }
}

