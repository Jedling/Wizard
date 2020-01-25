<template>
  <div class="container">
    <div class="wizard">
      <div class="row">
        <div class="col-12">
          <!-- <TransportationType :dModel="vModel.TransportType"></TransportationType>
            <TradeLane :dModel="vModel.TradeLaneType" class="mt-5"></TradeLane>
            <CargoRisk :dModel="vModel.CargoRiskType" class="mt-5"></CargoRisk>
            <CargoPropertiesDG :dModel="vModel.CargoPropertiesDGType" class="mt-5"></CargoPropertiesDG>
            <CargoPropertiesSoG class="mt-5"></CargoPropertiesSoG>
            <CargoPropertiesTC class="mt-5"></CargoPropertiesTC>
            <LoadingMode class="mt-5"></LoadingMode>
            <LoadingModeWheeledOrOddSize class="mt-5"></LoadingModeWheeledOrOddSize>
            <PackingMode class="mt-5"></PackingMode>
            <AdditionalClauses class="mt-5"></AdditionalClauses>
            <DangerousClasses class="mt-5"></DangerousClasses>
          <Incoterms class="mt-5"></Incoterms>-->
        </div>
        <!-- <div v-show="currentStep === 3" class="cargo-properties-dg row">
        <component v-if="compOn" v-bind:is="currentComp" :dModel="compData"></component>
        </div>-->
        <transition name="fade" mode="out-in">
          <component
            v-bind:is="currentComp"
            :dModel="compData"
            @clicked="nextQuestion"
            class="mt-5"
          ></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { WizardModel } from "@/types/WizardModel";
import { CustomerViewModel } from "@/types/CustomerViewModel";
import TransportationType from "@/components/TransportationType.vue";
import TradeLane from "@/components/TradeLane.vue";
import CargoPropertiesDG from "@/components/CargoPropertiesDG.vue";
import CargoPropertiesTC from "@/components/CargoPropertiesTC.vue";
import PackingMode from "@/components/PackingMode.vue";
import LoadingMode from "@/components/LoadingMode.vue";
import CargoPropertiesSoG from "@/components/CargoPropertiesSoG.vue";
import LoadingModeWheeledOrOddSize from "@/components/LoadingModeWheeledOrOddSize.vue";
import AdditionalClauses from "@/components/AdditionalClauses.vue";
import CargoRisk from "@/components/CargoRisk.vue";
import DangerousClasses from "@/components/DangerousClasses.vue";
import Incoterms from "@/components/Incoterms.vue";

@Component({
  components: {
    TransportationType,
    TradeLane,
    CargoRisk,
    CargoPropertiesDG,
    CargoPropertiesTC,
    PackingMode,
    LoadingMode,
    CargoPropertiesSoG,
    LoadingModeWheeledOrOddSize,
    AdditionalClauses,
    DangerousClasses,
    Incoterms
  }
})
export default class Wizard extends Vue {
  private compOn: boolean = true;
  @Watch("vModel.TransportType.Id") private transport(
    newValue: string,
    oldValue: string
  ) {
    console.log(`old: ${oldValue}, - new: ${newValue}`, "TransportType");
  }
  @Watch("vModel.RiskCategory.Id") private riskCategory(
    newValue: string,
    oldValue: string
  ) {
    console.log(`old: ${oldValue}, - new: ${newValue}`, "RiskCategory");
  }
  private currentComp: string = "DangerousClasses";
  private currentStep: number = 0;
  private vModel: CustomerViewModel = new CustomerViewModel();
  private compData: any = this.vModel.DangerousClassesType;
  private showNextQuestion(nextstep: number, data: number) {
    this.currentStep++;
  }
  private showPreviousQuestion() {
    this.currentStep--;
  }
  private nextQuestion(isValid: boolean, isNext: boolean) {
    this.compOn = false;
    this.currentStep = isNext ? this.currentStep + 1 : this.currentStep - 1;
    this.currentComp = this.GetComponent(this.currentStep, false);
    this.compData = this.GetComponent(this.currentStep, true);
    this.compOn = true;
  }
  private GetComponent(nextStep: number, doYouWantData: boolean): any {
    switch (nextStep) {
      case 0:
        return !doYouWantData
          ? "TransportationType"
          : this.vModel.TransportType;
        break;
      case 1:
        return !doYouWantData ? "TradeLane" : this.vModel.TradeLaneType;
        break;
      case 2:
        return !doYouWantData ? "CargoRisk" : this.vModel.CargoRiskType;
        break;
      case 3:
        return !doYouWantData
          ? "CargoPropertiesDG"
          : this.vModel.CargoPropertiesDGType;
        break;
      case 4:
        return !doYouWantData
          ? "CargoPropertiesTC"
          : this.vModel.CargoPropertiesTCType;
        break;
      case 5:
        return !doYouWantData
          ? "CargoPropertiesSoG"
          : this.vModel.CargoPropertiesSoGType;
        break;
      case 6:
        return !doYouWantData ? "LoadingMode" : this.vModel.LoadingModeType;
        break;
      case 7:
        return !doYouWantData
          ? "LoadingModeWheeledOrOddSize"
          : this.vModel.LoadingModeWheeledOrOddSizedType;
        break;
      case 8:
        return !doYouWantData ? "PackingMode" : this.vModel.PackingModeType;
        break;
      case 9:
        return !doYouWantData
          ? "AdditionalClauses"
          : this.vModel.AdditionalClausesType;
        break;
      case 10:
        return !doYouWantData
          ? "DangerousClasses"
          : this.vModel.DangerousClassesType;
        break;
      case 11:
        return !doYouWantData ? "Incoterms" : this.vModel.IncotermsType;
        break;
      default:
        return "";
        break;
    }
  }
}
</script>
<style scoped lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
