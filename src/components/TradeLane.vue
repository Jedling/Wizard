<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- <i @click="showPreviousQuestion" class="fas fa-chevron-up mb-4"></i> -->
        <div class="row mt-1">
          <div class="col-12">
            <h2 class="trade-lane">2. Trade Lane.</h2>
            <p class="trade-prompt mt-1">Please select your current location and destination.</p>
          </div>
        </div>

        <!-- Radio button toggle for location -->
        <div class="row">
          <div class="col-12">
            <div class="form-check form-check-inline">
              <input
                v-model="dModel.IsCountry"
                class="form-check-input radio-button"
                type="radio"
                name="location"
                :value="true"
              >
              <label class="form-check-label" for="inlineRadio1">Country</label>
            </div>
            <div class="form-check form-check-inline mb-3">
              <input
                v-model="dModel.IsCountry"
                class="form-check-input radio-button"
                type="radio"
                name="location"
                :value="false"
              >
              <label class="form-check-label" for="inlineRadio2">U.S States</label>
            </div>
          </div>
        </div>

        <!--Country Origin -->
        <div v-show="dModel.IsCountry" class="row justify-content-center">
          <div class="col-12 col-md-6 mb-4 input-header">
            <label>Your Country</label>
            <div class="input-group">
              <select
                v-model="dModel.Country.Origin"
                class="custom-select"
                aria-label="Example select with button addon"
              >
                <option
                  :disabled="country.Id === 0"
                  v-for="(country, index) in CountryList"
                  :key="index"
                  :value="country"
                  :index="index"
                >{{ country.Name }}</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-6 input-header">
            <label>Destination Country</label>
            <div class="input-group">
              <select
                v-model="dModel.Country.Destination"
                class="custom-select mb-5"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                <option
                  :disabled="country.Id === 0"
                  v-for="(country, index) in CountryList"
                  :key="index"
                  :value="country"
                  :index="index"
                >{{ country.Name }}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- State Origin -->
        <div v-show="!dModel.IsCountry" class="row justify-content-center">
          <div class="col-12 col-md-6 mb-4 input-header">
            <label>Your State</label>
            <div class="input-group">
              <select
                v-model="dModel.State.Origin"
                class="custom-select"
                aria-label="Example select with button addon"
              >
                <!-- <option disabled selected>Please select origin</option> -->
                <option
                  :disabled="state.Id === 0"
                  v-for="(state, index) in StateList"
                  :key="index"
                  :value="state"
                  :index="index"
                >{{ state.Name }}</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-6 input-header">
            <label>Destination State</label>
            <div class="input-group">
              <select
                v-model="dModel.State.Destination"
                class="custom-select mb-5"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                <!-- <option value="-1" selected>Please select destination</option> -->
                <option
                  :disabled="state.Id === 0"
                  v-for="(state, index) in StateList"
                  :key="index"
                  :value="state"
                  :index="index"
                >{{ state.Name }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8">
            <button @click="onButtonClick" class="next-step">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TradeLaneType } from "@/types/TradeLane/TradeLaneType";
import { CountryAndStateTypeModel } from "@/types/TradeLane/CountryAndStateTypeModel";
import { OriginAndDestinationModel } from "../types/TradeLane/OriginAndDestinationModel";
import axios from "axios";

@Component({
  components: {}
})
export default class TradeLane extends Vue {
  @Prop() private dModel!: TradeLaneType;

  private CountryList: OriginAndDestinationModel[] = [];
  private StateList: OriginAndDestinationModel[] = [];

  private onButtonClick() {
    let isValid =
      (this.dModel.Country.Destination.Id && this.dModel.Country.Origin.Id) ||
      (this.dModel.State.Destination.Id && this.dModel.State.Origin.Id)
        ? true
        : false;
    if (isValid) {
      this.$emit("clicked", isValid, true);
    } else {
      // alert("please select tradelane");
    }
  }
  async created() {
    // this.dModel.Origin = new CountryModel(16, 'Azerbaijan', 0);
    // här kan man kanske lägga in så man lokaliser besökarens ip-adress
    // en databas som kanske visar att han befinner sig i tex. sverige
    // hitta från countrylist och pusha in i destination eller origin direkt.
    this.dModel.Country.Origin = {
      Id: 0,
      Name: "Please select origin",
      Rate: 0
    };
    // this.dModel.Country.Destination = new OriginAndDestinationModel(215, 'Sweden', 0);
    this.dModel.State.Origin = { Id: 0, Name: "Please select origin", Rate: 0 };
    // this.dModel.State.Destination = new OriginAndDestinationModel(1, 'Alabama', 0);
    await axios
      .get("https://imtapicountry.azurewebsites.net/api/CountryStates")
      .then(response => {
        const data = response.data;
        this.CountryList.push({ Id: 0, Name: "Please select origin", Rate: 0 });
        data.Countries.forEach((country: any) => {
          this.CountryList.push({
            Id: country.Id,
            Name: country.Name,
            Rate: 0
          });
        });
        this.StateList.push({ Id: 0, Name: "Please select origin", Rate: 0 });
        data.States.forEach((state: any) => {
          this.StateList.push({ Id: state.Id, Name: state.Name, Rate: 0 });
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
.trade-lane {
  display: inline;
  margin: 0px;
}
.input-header {
  text-align: left;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
</style>
