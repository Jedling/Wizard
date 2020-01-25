<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="dg-header">Cargo Properties</h2>
        <p class="dg-question">My goods are considered Dangerous Goods</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <label v-for="(option, index) in DangerousGoods" :key="index" :value="option" class="col-4">
        <input
          v-model="dModel.Id"
          class
          type="radio"
          name="test"
          :value="option.Id"
          :checked="option.Id"
        >
        <div class="dg-option">{{ option.Name }}</div>
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
import { CargoPropertiesDGModel } from "@/types/DangerousGoods/CargoPropertiesDGModel";
import { CargoPropertiesDGType } from '@/types/DangerousGoods/CargoPropertiesDGType';
import DangerousGoods from "@/assets/data/CargoPropertiesDGEntity";

@Component({
  components: {}
})
export default class CargoPropertiesDG extends Vue {
  private isSelected: boolean = false;
  @Prop() private dModel!: CargoPropertiesDGType;

  private DangerousGoods: CargoPropertiesDGModel[] = DangerousGoods;

  private onButtonClick() {
    let isValid = (this.dModel.Id > 0) ? true : false;
    if(isValid) {
      this.$emit("clicked", isValid, true)
    }else {
      alert('Please select Yes or No');
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.dg-header {
  text-align: center;
}
.dg-question {
  font-size: 0.8rem;
}
.dg-option {
  border: 2px solid rgba(196, 195, 195, 0.699);
  border-radius: 5px;
  width: 100%;
  background-color: white;
}

[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + .dg-option {
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
    color: white;
  }
}

/* CHECKED STYLES */
[type="radio"]:checked + .dg-option {
  background-color: red;
  color: white;
  border-radius: 5px;
}
</style>
