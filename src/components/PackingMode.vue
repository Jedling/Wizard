<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="pm-header">Packing Mode</h2>
        <p class="pm-question">Please selecet who packed the goods</p>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(option, index) in packingMode"
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PackingModeModel } from '@/types/PackingMode/PackingModeModel';
import { PackingModeType } from '@/types/PackingMode/PackingModeType';
import packingModeData from '@/assets/data/PackingModeEntity';

@Component({
  components: {},
})
export default class PackingMode extends Vue {
  @Prop() private dModel!: PackingModeType;
  private packingMode: PackingModeModel[] = packingModeData;

  private onButtonClick() {
    let isValid = (this.dModel.Id > 0) ? true : false;
    if(isValid) {
      this.$emit('clicked', isValid, true);
    }else {
      alert('Please choose one of the following');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
