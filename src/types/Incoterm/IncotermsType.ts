import { IncotermsTypeModel } from './IncotermsTypeModel';

interface IIncotermsType {
  BuyerImporter: IncotermsTypeModel;
  SellerExporter: IncotermsTypeModel,
  IsBuyer: boolean;
}

export class IncotermsType implements IIncotermsType {
  public BuyerImporter: IncotermsTypeModel;
  public SellerExporter: IncotermsTypeModel;
  public IsBuyer: boolean;
  /**
   *
   */
  constructor(buyerImporter: IncotermsTypeModel,
              sellerExporter: IncotermsTypeModel,
              isBuyer: boolean = false,
              ) {
    this.BuyerImporter = buyerImporter;
    this.SellerExporter = sellerExporter;
    this.IsBuyer = isBuyer;
  }
}
