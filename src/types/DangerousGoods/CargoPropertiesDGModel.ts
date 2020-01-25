interface ICargoPropertiesDGModel {
  Name: string;
  Id: number;
  Rate: number;
  Selected: boolean;
}

export class CargoPropertiesDGModel implements ICargoPropertiesDGModel {
  public Name: string;
  public Id: number;
  public Rate: number;
  public Selected: boolean;
  /**
   *
   */
  constructor(id: number = 0, name: string = '', rate: number = 0, selected: boolean = false) {
    this.Name = name;
    this.Id = id;
    this.Rate = rate;
    this.Selected = selected;
  }
}
