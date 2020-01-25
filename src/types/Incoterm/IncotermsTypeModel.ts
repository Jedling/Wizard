interface IIncotermsTypeModel {
  Id: number;
  Name: string;
  Description: string;
  Selected: boolean;
  Value: number;
}

export class IncotermsTypeModel implements IIncotermsTypeModel {
  public Id: number;
  public Name: string;
  public Description: string;
  public Selected: boolean;
  public Value: number;
  /**
   *
   */
  constructor(
              id: number = 0,
              name: string = '',
              description: string = '',
              selected: boolean = false,
              value: number = 0) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Selected = selected;
    this.Value = value;
  }
}

