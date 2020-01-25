<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="dg-header">Loading Mode</h2>
        <p
          class="dg-question"
        >Does your shipment consist of wheeled cargo and/or other odd sized industrial goods?</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <label v-for="(option, index) in oddSized" :key="index" :value="option.Id" class="col-4">
        <input v-model="dModel.Id" class type="radio" name="test" :value="option.Id" checked>
        <div class="dg-option"> {{ option.Name }} </div>
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
import { LoadingModeWheeledOrOddSizedModel } from "@/types/OddSized/LoadingModeWheeledOrOddSizedModel";
import { LoadingModeWheeledOrOddSizedType } from '@/types/OddSized/LoadingModeWheeledOrOddSizedType';
import oddSizedData from '@/assets/data/OddSizedEntity';
@Component({
  components: {}
})
export default class LoadingModeWheeledOrOddSize extends Vue {
@Prop() private dModel!: LoadingModeWheeledOrOddSizedType;
private oddSized: LoadingModeWheeledOrOddSizedModel[] = oddSizedData;

  private onButtonClick() {
    let isValid = (this.dModel.Id > 0) ? true : false;
    if(isValid) {
      this.$emit("clicked", isValid, true);
    }else {
      alert('Please choose one of the following!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
