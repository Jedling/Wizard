<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="tc-header mb-4">What type of client are you?</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="(client, index) in clients"
        :key="client.Name"
        :index="index"
        class="col-md-4 col-12"
      >
        <label class="client-option">
          <input
            v-model="SelectedMode"
            type="radio"
            name="client"
            :value="client.Id"
            :checked="client.Id === SelectedMode"
          >
          <div class="client-name"> {{ client.Name }} </div>
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="tc-header mt-4">Incoterms</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <img class="incoterms-img" v-bind:src="incotermsImg">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="progress reverse-progress mb-4">
          <div
            class="progress-bar progress-right bg-danger"
            role="progressbar"
            :style="`width: ${tempValue.toString()}%`"
            :aria-valuenow="tempValue"
            aria-valuemin="0"
            aria-valuemax="100"
            ref="progressbar"
          >
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="(incoterm, index) in showIncotermsClass"
        :key="incoterm.Name"
        :index="index"
        class="col-12 mb-2 col-md-1"
      >
        <label class="it-option">
          <input @click="showProgressValue(incoterm.Id)" v-model="dModel.Id" type="radio" name="incoterm" :value="incoterm.Id" :checked="incoterm.Id">
          <div class="it-name">{{ incoterm.Name }}</div>
        </label>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <button @click="onButtonClick" class="mt-3 mb-5 next-step">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import clientsData from "@/assets/data/IncotermsClientEntity";
import { IncotermsClientTypeModel } from "@/types/Incoterm/IncotermsClientTypeModel";
import { IncotermsTypeModel } from "@/types/Incoterm/IncotermsTypeModel";
import { IncotermsType } from '@/types/Incoterm/IncotermsType';

@Component({
  components: {}
})
export default class Incoterms extends Vue {
  @Prop() private dModel!: IncotermsType;
  private clients: IncotermsClientTypeModel[] = clientsData;
  private isSelected: boolean = false;
  private incotermsImg: string = "./img/incoterms/airIncoterms.png";
  private incoterms: number = 0;
  private showIncoterms: boolean = false;
  private tempValue: number = 0;
  private SelectedMode: number = 1;

  private onButtonClick(value: string) {
    this.$emit("clicked", this.isSelected, "PackingMode");
  }
  private showProgressValue(id: number) {
    const temp = this.clients.find((item) => item.Id === this.SelectedMode)!.Incoterms;
    this.tempValue = temp.find((x) => x.Id === id)!.Value;
    if(this.SelectedMode === 2) {
      const revProgress = this.$refs.progressbar as HTMLDivElement;
      revProgress.classList.add('progress-right', 'reverse-progress');
      revProgress.classList.remove('progress');
    }else if(this.SelectedMode === 1) {
      const progress = this.$refs.progressbar as HTMLDivElement;
      progress.classList.add('progress');
      progress.classList.remove('reverse-progress', 'progress-right');
    }
  }
  get showIncotermsClass() {
    return this.clients[this.incoterms].Incoterms;
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
.incoterms-img {
  width: 100%;
}
.it-name {
  border: 2px solid rgba(196, 195, 195, 0.699);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 100%;
  background-color: white;
}
.it-option {
  display: block;
}
.client-name {
  border: 2px solid rgba(196, 195, 195, 0.699);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 100%;
  background-color: white;
  cursor: pointer;
    &:hover {
      background-color: #cec9c0;
      transition: 0.5s ease;
    }
}
.client-option {
  display: block;
}
.reverse-progress {
  display: block;
  height: 1rem;
  overflow: hidden;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem;
}
.progress-right {
  float: right;
  color: black;
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
[type="radio"] + .client-name {
  cursor: pointer;
  width: 100%;
}

/* CHECKED STYLES */
[type="radio"]:checked + .client-name {
  background-color: red;
  color: white;
  border-radius: 5px;
}

/* IMAGE STYLES */
[type="radio"] + .it-name {
  cursor: pointer;
  width: 100%;
}

/* CHECKED STYLES */
[type="radio"]:checked + .it-name {
  background-color: red;
  color: white;
  border-radius: 5px;
}
</style>
