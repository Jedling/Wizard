<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="pm-header">Cargo Properties</h2>
        <p class="pm-question">Please select the state of goods.</p>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(option, index) in stateOfGoods"
        :key="option.Name"
        :index="index"
        class="col-12 col-md-4 mb-3"
      >
        <label class="pm-option">
          <input v-model="dModel.Id" type="radio" name="test" :value="option.Id" checked>
          <div class="pm-name">{{ option.Name }}</div>
        </label>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <button @click="onButtonClick" class="mt-3 next-step">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CargoPropertiesSoGModel } from "@/types/StateOfGoods/CargoPropertiesSoGModel";
import { CargoPropertiesSoGType } from '@/types/StateOfGoods/CargoPropertiesSoGType';
import stateOfGoodsData from "@/assets/data/CargoPropertiesSoGEntity";

@Component({
  components: {}
})
export default class CargoPropertiesSoG extends Vue {
  @Prop() private dModel!: CargoPropertiesSoGType;
  private stateOfGoods: CargoPropertiesSoGModel[] = stateOfGoodsData;

  private onButtonClick() {
    let isValid = (this.dModel.Id > 0) ? true : false;
    if(isValid) {
      this.$emit("clicked", isValid, true);
    }else {
      alert('Please select one of the following:');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .active-bg {
//   background-color: #e92547 !important;
//   border-radius: 15px;
//   color: white;
// }
.next-step {
  border: 2px solid rgba(196, 195, 195, 0.699);
  border-radius: 5px;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
  }
}
.pm-header {
  text-align: center;
}
.pm-question {
  font-size: 0.8rem;
}
.pm-name {
  border: 2px solid rgba(196, 195, 195, 0.699);
  border-radius: 5px;
  width: 100%;
  background-color: white;
}
.pm-option {
  display: block;
}
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
/* IMAGE STYLES */
[type="radio"] + .pm-name {
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
    color: white;
  }
}
/* CHECKED STYLES */
[type="radio"]:checked + .pm-name {
  background-color: red;
  color: white;
  border-radius: 5px;
}
</style>
