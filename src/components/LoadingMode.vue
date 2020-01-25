<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="lm-header">Loading Mode</h2>
        <p class="lm-question">Please indicate how the goods are loaded and shipped.</p>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(option, index) in loadingMode"
        :key="option.Name"
        :index="index"
        class="col-6 col-md-3 mb-3"
      >
        <label class="lm-option">
          <input v-model="dModel.Id" type="radio" name="test" :value="option.Id" checked>
          <div class="lm-name">{{ option.Name }}</div>
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
import { LoadingModeModel } from '@/types/LoadingMode/LoadingModeModel';
import { LoadingModeType } from '@/types/LoadingMode/LoadingModeType';
import loadingModeData from '@/assets/data/LoadingModeEntity';

@Component({
  components: {},
})
export default class LoadingMode extends Vue {
  @Prop() private dModel!: LoadingModeType;
  private loadingMode: LoadingModeModel[] = loadingModeData;

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
.lm-header {
  text-align: center;
}
.lm-question {
  font-size: 0.8rem;
  text-align: center;
}
.lm-name {
  font-size: 0.7rem;
  border: 2px solid rgba(196, 195, 195, 0.699);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 100%;
  background-color: white;
  height: 8vh;
  padding: 13px 0px;
}
.lm-option {
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
[type="radio"] + .lm-name {
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
    color: white;
  }
}

/* CHECKED STYLES */
[type="radio"]:checked + .lm-name {
  background-color: red;
  color: white;
  border-radius: 15px;
}
</style>
