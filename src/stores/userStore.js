import { defineStore } from "pinia";
import {
  getLocationByCurrency,
  getPremiumLabel,
  getPremiumPackage,
  PREMIUM_SAFE,
  PREMIUM_STANDARD,
  PREMIUM_SUPER_SAFE,
} from "../helpers/utils";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    name: "",
    age: 50,
    location: "Hong Kong",
    currency: "HKD",
    rate: 1,
    selectedPremium: PREMIUM_STANDARD,
    premiums: {
      Standard: PREMIUM_STANDARD,
      "Safe (+250HKD, 50%)": PREMIUM_SAFE,
      "Super Safe (+375HKD, 75%)": PREMIUM_SUPER_SAFE,
    },
    showAgeError: false,
  }),
  getters: {
    finalFee: (state) => state.selectedPremium * 10 * state.age * state.rate,
    premiumPackage: (state) => getPremiumPackage(state.selectedPremium),
  },
  actions: {
    onAgeChange(age) {
      this.premiums = {
        Standard: PREMIUM_STANDARD,
        [`${getPremiumLabel(PREMIUM_SAFE, age, this.currency)}`]: PREMIUM_SAFE,
        [`${getPremiumLabel(PREMIUM_SUPER_SAFE, age, this.currency)}`]:
          PREMIUM_SUPER_SAFE,
      };
      this.showAgeError = age > 100;
    },
    onCurrencyChange(currencyVal) {
      const { location, rate } = getLocationByCurrency(currencyVal);
      this.location = location;
      this.rate = rate;
      this.premiums = {
        Standard: PREMIUM_STANDARD,
        [`${getPremiumLabel(PREMIUM_SAFE, this.age, this.currency)}`]:
          PREMIUM_SAFE,
        [`${getPremiumLabel(PREMIUM_SUPER_SAFE, this.age, this.currency)}`]:
          PREMIUM_SUPER_SAFE,
      };
    },
    onPremiumChange(premiumVal) {
      this.selectedPremium = premiumVal;
    },
  },
});
