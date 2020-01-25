import { DmodeAdditionalClausesModel } from '@/types/AdditionalClauses/DmodeAdditionalClausesModel';

interface IAdditionalClausesType {
  AdditionalClauses: DmodeAdditionalClausesModel[];
}

export class AdditionalClausesType implements IAdditionalClausesType {
  public AdditionalClauses: DmodeAdditionalClausesModel[];
  /**
   *
   */
  constructor(additionalClauses: DmodeAdditionalClausesModel[] = [],
              ) {
    this.AdditionalClauses = additionalClauses;
  }
}
