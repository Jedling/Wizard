import { DangerousClassesTypeModel } from './DangerousClassesTypeModel';

interface IDangerousClassesType {
  DangerousClasses: DangerousClassesTypeModel[];
}

export class DangerousClassesType implements IDangerousClassesType {
  public DangerousClasses: DangerousClassesTypeModel[];
  /**
   *
   */
  constructor(dangerousClasses: DangerousClassesTypeModel[] = [],
              ) {
    this.DangerousClasses = dangerousClasses;
  }
}
