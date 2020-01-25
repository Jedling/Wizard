<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="ac-header">Additional Clauses</h2>
        <p class="ac-question">Please select the add-ons your require.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div v-for="(option, index) in additionalClauses" :key="index" class="col-6 col-md-2">
        <label class="ac-option" :class="option.Selected ? 'active-bg' : ''">
          <input @click="selectedClauses(option.Id, option.Id)" v-model="option.Selected"  type="checkbox" name="test" :value="option.Id" checked>
        {{ option.Name }}
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
import { AdditionalClausesModel } from '@/types/AdditionalClauses/AdditionalClausesModel';
import { AdditionalClausesType } from '@/types/AdditionalClauses/AdditionalClausesType';
import { DmodeAdditionalClausesModel } from '@/types/AdditionalClauses/DmodeAdditionalClausesModel';
import additionalClausesData from '@/assets/data/AdditionalClausesEntity.ts';

@Component({
  components: {},
})
export default class AdditionalClauses extends Vue {
  @Prop() private dModel!: AdditionalClausesType;
  private additionalClauses: AdditionalClausesModel[] = additionalClausesData;

  private onButtonClick() {
    let isValid = (this.dModel.AdditionalClauses.length > 0) ? true : false;
    if(isValid) {
      this.$emit('clicked', isValid, true);
    }else {
      alert('Please choose minimum one of the following options');
    }
  }
  private selectedClauses(id: number, index: number) {
    const tempItem = this.additionalClauses.find(item => item.Id === id)!;
    const tempIndex = this.dModel.AdditionalClauses.findIndex(item => item.Id === id)!;
    if (tempItem.Selected === true) {
      this.dModel.AdditionalClauses.splice(tempIndex, 1);
      // supposed to be a vue way of splice...test n try
      // this.$delete(this.dModel.RiskCategory, index);
    } else {
      this.dModel.AdditionalClauses.push(tempItem);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active-bg {
  background-color: red !important;
  color: white;
}
.ac-header {
  text-align: center;
}
.ac-question {
  font-size: 0.8rem;
}
.ac-option {
  font-size: 0.6rem;
  // border: 2px solid rgba(196, 195, 195, 0.699);  
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 100%;
  background-color: white;
  height: 11vh;
  padding: 8px 3px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
    &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
    color: white;
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

[type="checkbox"]{
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="checkbox"] + .ac-option {
  cursor: pointer;
  width: 100%;
}

/* CHECKED STYLES */
[type="checkbox"]:checked + .ac-option {
  background-color: red;
  color: white;
  border-radius: 5px;
}
</style>
