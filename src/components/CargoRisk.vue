<template>
  <div class="container">
    <div class="cargo-risk-types">
      <div class="row mt-4">
        <div class="col-12">
          <h2 class="cargo-risk-header">3. Cargo Risk Types.</h2>
          <p
            class="cargo-risk-prompt mt-1"
          >Select the Category Risk type OR use the Cargo Commodity Lookup and type the HS-code or name of your product and select the one that nearest described your goods.</p>

          <div class="row">
            <div class="col-12">
              <div class="form-check form-check-inline">
                <input
                  v-model="dModel.IsRiskCategory"
                  class="form-check-input radio-button"
                  type="radio"
                  name="inlineRadioOptions"
                  :value="false"
                >
                <label class="form-check-label" for="inlineRadio1">Hs Code</label>
              </div>
              <div class="form-check form-check-inline mb-3">
                <input
                  class="form-check-input radio-button"
                  type="radio"
                  name="inlineRadioOptions"
                  :value="true"
                  v-model="dModel.IsRiskCategory"
                >
                <label class="form-check-label" for="inlineRadio2">Risk Category</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <!-- ************** Risk category options ******** -->
      <div v-if="dModel.IsRiskCategory" class="row">
        <div class="row justify-content-center">
          <div v-for="(option, index) in RiskCategoryList" :key="index" class="col-6 col-md-3">
            <label class="cr-option">
              <input
                @click="selectedRiskCategory(option.Id, option.Index)"
                v-model="option.Selected"
                type="checkbox"
                name="test"
                :value="option.Id"
                checked
              >
              <img class="risk-category-img" v-bind:src="option.Image">
            </label>
            <label class="more-info mb-3">
              <input
                v-model="option.MoreInfo"
                @click="openMoreInfo(option.Id)"
                type="checkbox"
                name="test"
                :value="option.Id"
                checked
              >
              More Info
            </label>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row justify-content-center">
          <div class="col-10 mb-3 search-bar">
            <input
              v-model="search"
              class="form-control"
              type="text"
              placeholder="Search..."
              id="myInput"
            >
          </div>
        </div>
        <div class="wrapper">
          <div class="row justify-content-center">
            <table class="col-10">
              <thead class="hs-search-th">
                <tr>
                  <th>Hs Code</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="hs-search-tr"
                  v-for="input in filteredList.slice(0, 5)"
                  :key="input.Code"
                  :value="input"
                  @click="getSearchResult(input.Code)"
                >
                  <td>{{ input.Code }}</td>
                  <td>{{ input.Description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="dModel.HsCode.length > 0">
          <h3 class="mt-2">You have chosen the following:</h3>
          <div class="row justify-content-center">
            <table class="col-10">
              <thead class="hs-code-th">
                <tr>
                  <th>Hs Code</th>
                  <th>Description</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in dModel.HsCode"
                  :key="item.Description"
                  class="table table-borderless"
                >
                  <td>{{ item.Code }}</td>
                  <td>{{ item.Description }}</td>
                  <td>
                    <button @click="deleteHsCodeItem(item.Id, item.index)">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p v-else>Empty list</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <button @click="onButtonClick" class="mt-3 mb-5 next-step">Next</button>
        </div>
      </div>
      <!-- Modal -->
      <transition name="fade">
        <div v-show="modalShowDescription" class="modal-filter">
          <div class="dc-modal scrollbar" id="scrollbar" ref="modal">
            <button @click="closeModal" type="button" class="close" data-dismiss="modal">&times;</button>
            <div class="modal-dialog mt-5">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">{{ modalName }}</h4>
                </div>
                <div class="modal-body">{{ modalContent }}</div>
                <div class="modal-footer">
                  <button
                    @click="closeModal"
                    type="button"
                    class="close-btn btn btn-danger"
                    data-dismiss="modal"
                  >Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import riskCategoryData from "@/assets/data/RiskCategoryEntity";
import { CargoRiskType } from "@/types/CargoRisk/CargoRiskType";
import { HsCodeModel } from "../types/CargoRisk/HsCodeModel";
import { RiskCategoryModel } from "../types/CargoRisk/RiskCategoryModel";
import axios from "axios";

@Component({
  components: {}
})
export default class CargoRisk extends Vue {
  @Prop() private dModel!: CargoRiskType;
  private HsCodeList: HsCodeModel[] = [];
  private RiskCategoryList: RiskCategoryModel[] = riskCategoryData;
  private search: string = "";
  private modalName: string = "";
  private modalContent: string = "";
  private modalShowDescription: boolean = false;

  @Watch("dModel.IsRiskCategory") private ToggleRiskMode(val: boolean) {
    if (this.dModel.IsRiskCategory) {
      this.dModel.HsCode = [];
      this.RiskCategoryList.forEach(x => (x.Selected = false));
    } else {
      this.HsCodeList.forEach(x => (x.Selected = false));
      this.dModel.RiskCategory = [];
    }
  }
  private selectedRiskCategory(id: number, index: number) {
    const tempItem = this.RiskCategoryList.find(item => item.Id === id)!;
    const tempIndex = this.dModel.RiskCategory.findIndex(item => item.Id === id)!;
    if (tempItem.Selected === true) {
      this.dModel.RiskCategory.splice(tempIndex, 1);
      // supposed to be a vue way of splice...test n try
      // this.$delete(this.dModel.RiskCategory, index);
    } else {
      this.dModel.RiskCategory.push(tempItem);
    }
  }
  private getSearchResult(hs: string) {
    const tempItem = this.HsCodeList.find(item => item.Code === hs)!;
    tempItem.Selected = true;
    this.dModel.HsCode.push(tempItem);
  }
  get filteredList() {
    return this.HsCodeList.filter(input => {
      return (
        (input.Code.toLowerCase().includes(this.search.toLowerCase()) ||
          input.Description.toLowerCase().includes(
            this.search.toLowerCase()
          )) &&
        input.Selected === false
      );
    });
  }
  // get filterSelectedList() {
  //   return this.HsCodeList.filter(item => item.Selected === true);
  // }
  private deleteHsCodeItem(id: number, index: number) {
    const tempItem = this.HsCodeList.find(item => item.Id === id)!;
    tempItem.Selected = false;
    const tempIndex = this.dModel.HsCode.findIndex((item) => item.Id === id)!;
    this.$delete(this.dModel.HsCode, tempIndex);
  }

  get filteredRiskCategoryList() {
    return this.RiskCategoryList;
  }
  private openMoreInfo(id: number) {
    this.modalName = this.RiskCategoryList.find(
      option => option.Id === id
    )!.Name;
    this.modalContent = this.RiskCategoryList.find(
      option => option.Id === id
    )!.Description;
    this.modalShowDescription = true;
    document.documentElement.style.overflow = "hidden";
    return (this.modalShowDescription = true);
  }
  private closeModal() {
    const modalEl = this.$refs.modal as HTMLDivElement;
    this.modalShowDescription = false;
    document.documentElement.style.overflow = "scroll";
  }
  private onButtonClick() {
    let isValid =
      ((this.dModel.RiskCategory.length > 0) || (this.dModel.HsCode.length > 0 ))
        ? true
        : false;
    if (isValid) {
      this.$emit("clicked", isValid, true);
    } else {
      alert("please select hs code or risk category");
    }
  }
  async created() {
    await axios
      .get("https://imtapihscodes.azurewebsites.net/api/HsCode6")
      .then(response => {
        const data = response.data;
        data.forEach((code: any) => {
          this.HsCodeList.push({
            Id: code.Id,
            Description: code.Description,
            Code: code.Code,
            Selected: false,
            Rate: 0
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-bar {
  padding: 0 !important;
}
.hs-search-th {
  text-align: left;
}
.hs-search-th {
  text-align: left;
}
.risk-category-img {
  position: relative;
  width: 100%;
  border: 2px solid rgba(196, 195, 195, 0.699);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    // background-color: #f6ecdb;
    transition: 0.5s ease;
    color: white !important;
    filter: brightness(0);
    -webkit-filter: brightness(0);
  }
}
.more-info {
  border: 2px solid rgba(196, 195, 195, 0.699);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.7rem;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  cursor: pointer;
  &:hover {
    background-color: #cec9c0;
    transition: 0.5s ease;
    color: white;
  }
}
.search-result {
  &:hover {
    background-color: #e92547;
    transition: 0.5s ease;
    color: white !important;
  }
}
.radio-button {
  margin-right: 5px;
  height: 2em;
}
.hs-code-th {
  padding: 0px;
  @media (min-width: 321px) {
    font-size: 0.9rem;
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
[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
/* IMAGE STYLES */
[type="checkbox"] + .risk-category-img {
  cursor: pointer;
  width: 100%;
}
/* CHECKED STYLES */
[type="checkbox"]:checked + .risk-category-img {
  background-color: red;
  color: white;
  border-radius: 15px;
  filter: brightness(2);
  -webkit-filter: brightness(2);
}
/* Moda */
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
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 90% !important;
  }
  .button {
    cursor: pointer;
    background-color: red;
    border: 1px solid dimgray;
  }
  .btn {
    width: 100%;
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
    border-radius: 0.3rem;
    outline: 0;
    width: 90% !important;
    margin: auto;
    padding: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
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
  // background-color: #fff;
  background-image: -webkit-gradient(
    linear,
    40% 0%,
    75% 84%,
    from(rgb(248, 80, 80)),
    to(rgb(230, 90, 90)),
    color-stop(0.6, rgb(243, 69, 0))
  );
}

// .cargo-modal {
//   top: 30% !important;
//   left: 50% !important;
//   float: left;
//   transform: translate(-50%, -50%);
//   position: fixed !important;
//   width: 30% !important;
//   z-index: 9999 !important;
//   background-color: #e92547;
//   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
//   padding: 0 0 10px;
//   color: #fff;
//   border-radius: 5px;
//   .button {
//     cursor: pointer;
//     background-color: red;
//     border: 1px solid dimgray;
//   }
//   .modal-header {
//     color: white;
//     border-bottom: 4px solid;
//     display: block;
//     text-align: center;
//   }
//   .modal-content {
//     color: black;
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//     position: relative;
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     pointer-events: auto;
//     background-color: #fff;
//     background-clip: padding-box;
//     border: 1px solid rgba(0, 0, 0, 0.2);
//     border-radius: 0.3rem;
//     outline: 0;
//     width: 90% !important;
//     margin: auto;
//     padding: 5px;
//     box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
//   }
// }
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
div.table-title {
  display: block;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
}

.table-title h3 {
  color: #fafafa;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", helvetica, arial, sans-serif;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}

/*** Table Styles **/

.table-fill {
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

th {
  color: #d5dde5;
  background: #1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 12px;
  font-weight: 100;
  padding: 12px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
}

th:first-child {
  border-top-left-radius: 3px;
}

th:last-child {
  border-top-right-radius: 3px;
  border-right: none;
}

tr {
  border-top: 1px solid #c1c3d1;
  border-bottom: 1px solid #c1c3d1;
  color: #666b85;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr:hover td {
  background: #4e5066;
  color: #ffffff;
  border-top: 1px solid #22262e;
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

tr:nth-child(odd) td {
  background: #ebebeb;
}

tr:nth-child(odd):hover td {
  background: #4e5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 3px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 3px;
}

td {
  background: #ffffff;
  padding: 20px;
  text-align: left;
  vertical-align: top;
  font-weight: 300;
  font-size: 13px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}
</style>
