interface IAdditionalClausesModel {
  Id: number;
  Name: string;
  Description: string;
  Selected: boolean;
  Rate: number;
}

export class AdditionalClausesModel implements IAdditionalClausesModel {
  public Id: number;
  public Name: string;
  public Description: string;
  public Selected: boolean;
  public Rate: number;
  /**
   *
   */
  constructor(id: number = 0,
              name: string = '',
              description: string = '',
              selected: boolean = false,
              rate: number = 0) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Selected = selected;
    this.Rate = rate;
  }
}

