<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="dg-header">Transport type</h2>
        <p class="dg-question">Please choose your transportation type.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div v-for="(option, index) in transportType" :key="index" class="col-6 col-lg-2 mb-3">
        <label class="pm-option">
          <input v-model="dModel.Id" type="radio" name="test" :value="option.Id">
          <img class="transport-img transport-white-layer" v-bind:src="option.Image">
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
import { TransportTypeModel } from '@/types/TransportType/TransportTypeModel';
import {TransportType} from '@/types/TransportType/TransportType';
import transportTypeData from '@/assets/data/TransportTypeEntity.ts';

@Component({
  components: {},
})
export default class TransportationType extends Vue {
  @Prop() private dModel!: TransportType; 
  private transportType: TransportTypeModel[] = transportTypeData;

  private onButtonClick() {
    let isValid = (this.dModel.Id > 0) ? true : false;
    if (isValid) {
      this.$emit('clicked', isValid, true);
    } else {
      alert('please select transportmode');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.transport-img {
  width: 100%;
  border: 2px solid rgba(196, 195, 195, 0.699);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    filter: brightness(0);
    -webkit-filter: brightness(0);
    transition: 0.5s ease;
  }
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
[type="radio"] + img {
  cursor: pointer;
  width: 100%;
}

/* CHECKED STYLES */
[type="radio"]:checked + img {
  background-color: red;
  color: white;
  border-radius: 15px;
  filter: brightness(2);
  -webkit-filter: brightness(2);
}
</style>
