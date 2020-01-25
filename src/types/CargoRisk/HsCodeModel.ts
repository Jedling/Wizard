interface IHsCodeModel {
  Id: number;
  Code: string;
  Rate: number;
  Description: string;
  Selected: boolean;
}

export class HsCodeModel implements IHsCodeModel {
  public Id: number;
  public Code: string;
  public Rate: number;
  public Description: string;
  public Selected: boolean;
    /**
     *
     */
  constructor(id: number = 0,
              code: string = '',
              rate: number = 0,
              description: string = '',
              selected: boolean = false,
              ) {
    this.Id = id;
    this.Code = code;
    this.Rate = rate;
    this.Description = description;
    this.Selected = selected;
  }
}
