interface IDangerousClassesChildTypeModel {
  Id: number;
  Name: string;
  Image: string;
  Description: string;
  Selected: boolean;
  Expr1: string;
}

export class DangerousClassesChildTypeModel implements IDangerousClassesChildTypeModel {
  public Id: number;
  public Name: string;
  public Image: string;
  public Description: string;
  public Selected: boolean;
  public Expr1: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    selected: boolean = false,
    image: string = '',
    expr1: string = '') {
    this.Id = id;
    this.Name = name;
    this.Image = image;
    this.Description = description;
    this.Selected = selected;
    this.Expr1 = expr1;
  }
}
