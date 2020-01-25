<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="dc-header">Dangerous Classes</h2>
        <p class="dc-question">Please select the suitable class from the following.</p>
      </div>
    </div>
    <div class="flex-row-container">
      <div v-for="(option, index) in dangerousClasses" :key="index.id" class="flex-row-item">
        <p class="description mb-2 mt-3">{{ option.Description }}</p>
        <label class="dc-option">
          <input
            @click="onCategoryClick(index, option.Id)"
            type="checkbox"
            name="dangerous"
            :value="option"
            :checked="option.Id"
          >
          <img
            :class="option.Childrens.some((item) => item.Selected) || option.Selected ? 'active-bg' : 'dangerous-img'"
            v-bind:src="option.Image"
          >
        </label>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <button @click="onButtonClick" class="mt-3 mb-2 next-step">Next</button>
      </div>
    </div>
      <div id="example-1">
        <transition name="slide-fade">
          <p class="alert-msg" v-if="show">Please choose something mmmkay</p>
        </transition>
      </div>
    <transition name="fade">
      <div v-show="modalShowDescription" class="modal-filter">
        <div class="dc-modal scrollbar" id="scrollbar" ref="modal">
          <button @click="closeModal" type="button" class="close" data-dismiss="modal">&times;</button>
          <div v-for="(suboption, subindex) in ShowChildrenClass" :key="subindex.id">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">{{ suboption.Description }} {{ suboption.Name }}</h4>
                </div>
                <div class="modal-body">
                  <label>
                    <input
                      @click="onSubCategoryClick(suboption.Id, suboption.Index)"
                      type="checkbox"
                      name="test"
                      :value="suboption.Id"
                      :checked="suboption.Id"
                    >
                    <img
                      :class="suboption.Selected ? 'active-bg' : 'dangerous-sub-img'"
                      v-bind:src="suboption.Image"
                    >
                  </label>
                  <p class="expr1">{{ suboption.Expr1 }}</p>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
          <button
            @click="closeModal"
            type="button"
            class="close-btn btn btn-danger"
            data-dismiss="modal"
          >Close</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import dangerousClassesData from "@/assets/data/DangerousClassesEntity";
import { DangerousClassesTypeModel } from "@/types/DangerousClasses/DangerousClassesTypeModel";
import { DangerousClassesType } from "@/types/DangerousClasses/DangerousClassesType";
import { DangerousClassesChildTypeModel } from "@/types/DangerousClasses/DangerousClassesChildTypeModel";

@Component({
  components: {}
})
export default class DangerousClasses extends Vue {
  @Prop() private dModel!: DangerousClassesType;
  private dangerousClasses: DangerousClassesTypeModel[] = dangerousClassesData;
  private isSelected: boolean = false;
  private nextStep: boolean = false;
  private selectDG: number = 0;
  private modalShowDescription: boolean = false;
  private show: boolean = false;

  private onButtonClick(value: string) {
    let isValid = this.dModel.DangerousClasses.length > 0 ? true : false;
    if (isValid) {
      this.$emit("clicked", isValid, true);
    } else {
      this.show = true;
    }
  }
  private onCategoryClick(index: number, id: number) {
    this.selectDG = index;
    const tempItem = this.dangerousClasses.find(item => item.Id === id)!;
    console.log(tempItem);
    if (tempItem.Childrens.length > 0) {
      document.documentElement.style.overflow = "hidden";
      this.modalShowDescription = true;
    } else {
      tempItem.Selected = !tempItem.Selected;
      if (tempItem.Selected) {
      this.show = false;
        this.dModel.DangerousClasses.push(tempItem);
      } else {
        const tempIndex = this.dModel.DangerousClasses.findIndex(
          item => item.Id === id
        )!;
        this.dModel.DangerousClasses.splice(tempIndex, 1);
      }
    }
  }
  private onSubCategoryClick(id: number, index: number) {
    const childItem = this.ShowChildrenClass.find(item => item.Id === id)!;
    childItem.Selected = !childItem.Selected;
    console.log(childItem);

    if (childItem.Selected) {
      const tempItem = new DangerousClassesTypeModel();
      tempItem.Id = childItem.Id;
      tempItem.Name = childItem.Name;
      tempItem.Image = childItem.Image;
      tempItem.Description = childItem.Description;
      tempItem.Selected = true;
      this.dModel.DangerousClasses.push(tempItem);
      this.show = false;
    } else {
      const childIndex = this.dModel.DangerousClasses.findIndex(
        item => item.Id === id
      )!;
      this.dModel.DangerousClasses.splice(childIndex, 1);
    }
  }
  get ShowChildrenClass() {
    return this.dangerousClasses[this.selectDG].Childrens;
  }
  private closeModal() {
    const modalEl = this.$refs.modal as HTMLDivElement;
    this.modalShowDescription = false;
    document.documentElement.style.overflow = "scroll";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-row-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.flex-row-container > .flex-row-item {
  flex-grow: 1;
  flex: 1 1 30%;
}
.flex-row-container > .flex-row-item > .dangerous-img {
  height: 100px;
}
.flex-row-item {
  border: 2px solid rgba(196, 195, 195, 0.699);
  margin: 10px;
  border-radius: 5px;
}
.active-bg {
  background-color: red;
  border-radius: 5px;
  padding: 1px;
  cursor: pointer;
}
.close {
  position: sticky;
  top: 20px;
  right: 30px;
}
.close-btn {
  width: 100%;
  position: sticky;
  bottom: 0;
}
.description {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 60%;
}
.dangerous-img {
  padding: 1px;
  cursor: pointer;
  @media (max-width: 768px) {
  }
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
  }
}
.dangerous-sub-img {
  margin: auto;
  width: 40%;
  border: 2px solid rgba(196, 195, 195, 0.699);
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
  }
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
  }
}
.dc-description {
  font-size: 10%;
  color: red;
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
.dc-header {
  text-align: center;
}
.dc-question {
  font-size: 0.8rem;
}
.dc-option {
  border: 2px solid rgba(196, 195, 195, 0.699);
  border-radius: 5px;
  cursor: pointer;
}
[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
/* IMAGE STYLES */
[type="checkbox"] + .dangerous-sub-img {
  cursor: pointer;
  width: 100%;
}
/* CHECKED STYLES */
[type="checkbox"]:checked + .active-bg {
  background-color: red;
  color: white;
  border-radius: 5px;
}
.modal-filter {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 1;
}
.dc-modal {
  top: 50% !important;
  left: 50% !important;
  float: left;
  transform: translate(-50%, -50%);
  position: fixed !important;
  width: 70% !important;
  z-index: 9999 !important;
  background-color: #e92547;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 1px;
  @media (max-width: 768px) {
    width: 90% !important;
  }
  .button {
    cursor: pointer;
    background-color: red;
    border: 1px solid dimgray;
  }
  .modal-header {
    color: black;
    border-bottom: 4px solid;
    display: block;
    text-align: center;
  }
  .modal-content {
    display: block;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    position: relative;
    -ms-flex-direction: column;
    flex-direction: column;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
    outline: 0;
    width: 90% !important;
    margin: auto;
    padding: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.scrollbar {
  float: left;
  height: 70%;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}
#scrollbar::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}

#scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    40% 0%,
    75% 84%,
    from(rgb(248, 80, 80)),
    to(rgb(230, 90, 90)),
    color-stop(0.6, rgb(243, 69, 0))
  );
}
/* Alert message */
.alert-msg {
  color: red;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
