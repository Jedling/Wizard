import { DangerousClassesChildTypeModel } from '@/types/DangerousClasses/DangerousClassesChildTypeModel';

interface IDangerousClassesTypeModel {
  Id: number;
  Name: string;
  Image: string;
  Description: string;
  Selected: boolean;
  Childrens: DangerousClassesChildTypeModel[] | null;
}

export class DangerousClassesTypeModel implements IDangerousClassesTypeModel {
  public Id: number;
  public Name: string;
  public Image: string;
  public Description: string;
  public Selected: boolean;
  public Childrens: DangerousClassesChildTypeModel[];
  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    selected: boolean = false,
    image: string = '',
    childrens: DangerousClassesChildTypeModel[] = []) {
    this.Id = id;
    this.Name = name;
    this.Image = image;
    this.Description = description;
    this.Selected = selected;
    this.Childrens = childrens;
  }
}
