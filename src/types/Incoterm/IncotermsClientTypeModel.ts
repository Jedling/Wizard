import { IncotermsTypeModel } from '@/types/Incoterm/IncotermsTypeModel';

interface IIncotermsClientTypeModel {
  Id: number;
  Name: string;
  Description: string;
  Selected: number;
  Incoterms: IncotermsTypeModel[];
}

export class IncotermsClientTypeModel implements IIncotermsClientTypeModel {
  public Id: number;
  public Name: string;
  public Description: string;
  public Selected: number;
  public Incoterms: IncotermsTypeModel[];
  /**
   *
   */
  constructor(
              id: number = 0,
              name: string = '',
              description: string = '',
              selected: number = 1,
              incoterm: IncotermsTypeModel[]) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Selected = selected;
    this.Incoterms = incoterm;
  }
}

