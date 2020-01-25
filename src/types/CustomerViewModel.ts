import { TransportType } from '@/types/TransportType/TransportType';
import { CargoRiskType } from '@/types/CargoRisk/CargoRiskType';
import { TradeLaneType } from './TradeLane/TradeLaneType';
import { CargoPropertiesDGType } from './DangerousGoods/CargoPropertiesDGType';
import { CargoPropertiesTCType } from '@/types/TemperatureControlled/CargoPropertiesTCType';
import { CargoPropertiesSoGType } from '@/types/StateOfGoods/CargoPropertiesSoGType';
import { LoadingModeType } from '@/types/LoadingMode/LoadingModeType';
import { LoadingModeWheeledOrOddSizedType } from '@/types/OddSized/LoadingModeWheeledOrOddSizedType';
import { PackingModeType } from '@/types/PackingMode/PackingModeType';
import { AdditionalClausesType } from './AdditionalClauses/AdditionalClausesType';
import { DangerousClassesType} from './DangerousClasses/DangerousClassesType';
import { IncotermsType } from './Incoterm/IncotermsType';

interface ICustomerViewModel {
  TransportType: TransportType;
  TradeLaneType: TradeLaneType;
  CargoRiskType: CargoRiskType;
  CargoPropertiesDGType: CargoPropertiesDGType;
  CargoPropertiesTCType: CargoPropertiesTCType;
  CargoPropertiesSoGType: CargoPropertiesSoGType;
  LoadingModeType: LoadingModeType;
  LoadingModeWheeledOrOddSizedType: LoadingModeWheeledOrOddSizedType;
  PackingModeType: PackingModeType;
  AdditionalClausesType: AdditionalClausesType;
  DangerousClassesType: DangerousClassesType;
  IncotermsType: IncotermsType;
}

export class CustomerViewModel implements ICustomerViewModel {
  public TransportType: TransportType;
  public TradeLaneType: TradeLaneType;
  public CargoRiskType: CargoRiskType;
  public CargoPropertiesDGType: CargoPropertiesDGType;
  public CargoPropertiesTCType: CargoPropertiesTCType;
  public CargoPropertiesSoGType: CargoPropertiesSoGType;
  public LoadingModeType: LoadingModeType;
  public LoadingModeWheeledOrOddSizedType: LoadingModeWheeledOrOddSizedType;
  public PackingModeType: PackingModeType;
  public AdditionalClausesType: AdditionalClausesType;
  public DangerousClassesType: DangerousClassesType;
  public IncotermsType: IncotermsType;
  /**
   *
   */
  constructor(
              transportType:
              TransportType = new TransportType(),
              tradeLaneType:
              TradeLaneType = new TradeLaneType(),
              cargoRiskType:
              CargoRiskType = new CargoRiskType(),
              cargoPropertiesDGType:
              CargoPropertiesDGType = new CargoPropertiesDGType(),
              cargoPropertiesTCType:
              CargoPropertiesTCType = new CargoPropertiesTCType(),
              cargoPropertiesSoGType:
              CargoPropertiesSoGType = new CargoPropertiesSoGType(),
              loadingMode:
              LoadingModeType = new LoadingModeType(),
              loadingModeWheeledOrOddSizedType:
              LoadingModeWheeledOrOddSizedType = new LoadingModeWheeledOrOddSizedType(),
              packingMode:
              PackingModeType = new PackingModeType(),
              additionalClausesType:
              AdditionalClausesType = new AdditionalClausesType(),
              dangerousClassesType:
              DangerousClassesType = new DangerousClassesType(),
              incotermsType: IncotermsType = new IncotermsType(),
              ) {
    this.TransportType = transportType;
    this.TradeLaneType = tradeLaneType;
    this.CargoRiskType = cargoRiskType;
    this.CargoPropertiesDGType = cargoPropertiesDGType;
    this.CargoPropertiesTCType = cargoPropertiesTCType;
    this.CargoPropertiesSoGType = cargoPropertiesSoGType;
    this.LoadingModeType = loadingMode;
    this.LoadingModeWheeledOrOddSizedType = loadingModeWheeledOrOddSizedType;
    this.PackingModeType = packingMode;
    this.AdditionalClausesType = additionalClausesType;
    this.DangerousClassesType =  dangerousClassesType;
    this.IncotermsType = incotermsType;
  }
}
