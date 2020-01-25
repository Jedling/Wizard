<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="tc-header">Cargo Properties</h2>
        <p class="tc-question">My goods need to be Temperature Controlled.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <label v-for="(option, index) in tempControlled" :key="index" class="col-4">
        <input v-model="dModel.Id" type="radio" name="test" :value="option.Id" :checked="option.Id">
        <div class="tc-option"> {{ option.Name }} </div>
      </label>
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
import { CargoPropertiesTCModel } from '@/types/TemperatureControlled/CargoPropertiesTCModel';
import { CargoPropertiesTCType } from '@/types/TemperatureControlled/CargoPropertiesTCType';
import temperatureControlledData from '@/assets/data/CargoPropertiesTCEntity';


@Component({
  components: {}
})
export default class CargoPropertiesTC extends Vue {
  @Prop() private dModel!: CargoPropertiesTCType;
  private tempControlled: CargoPropertiesTCModel[] = temperatureControlledData;

  private onButtonClick() {
    let isValid = (this.dModel.Id > 0) ? true : false;
    if(isValid) {
      this.$emit("clicked", isValid, true);
    }else {
      alert('Please select Yes or No!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tc-header {
  text-align: center;
}
.tc-question {
  font-size: 0.8rem;
}
.tc-option {
  border: 2px solid rgba(196, 195, 195, 0.699);
  border-radius: 5px;
  width: 100%;
  background-color: white;
}
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
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + .tc-option {
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
    color: white;
  }
}

/* CHECKED STYLES */
[type="radio"]:checked + .tc-option {
  background-color: red;
  color: white;
  border-radius: 5px;
}
</style>
