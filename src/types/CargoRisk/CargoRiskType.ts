import { RiskCategoryModel } from '@/types/CargoRisk/RiskCategoryModel';
import { HsCodeModel } from './HsCodeModel';

interface ICargoRiskType {
  RiskCategory: RiskCategoryModel[];
  HsCode: HsCodeModel[];
  IsRiskCategory: boolean;
}

export class CargoRiskType implements ICargoRiskType {
  public RiskCategory: RiskCategoryModel[];
  public HsCode: HsCodeModel[];
  public IsRiskCategory: boolean;
  /**
   *
   */
  constructor(riskCategory: RiskCategoryModel[] = [],
              hsCode: HsCodeModel[] = [],
              isRiskCategory: boolean = false) {
    this.RiskCategory = riskCategory;
    this.HsCode = hsCode;
    this.IsRiskCategory = isRiskCategory;
  }
}
