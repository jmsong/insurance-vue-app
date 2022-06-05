<script>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";

export default {
  setup() {
    const userStore = useUserStore();
    const {
      name,
      age,
      currency,
      selectedPremium,
      premiums,
      showAgeError,
      onPremiumChange,
    } = storeToRefs(userStore);

    return {
      name,
      age,
      currency,
      selectedPremium,
      premiums,
      userStore,
      showAgeError,
      onPremiumChange,
    };
  },
  methods: {
    onLocationChange(val) {
      this.userStore.onCurrencyChange(val);
    },
    onAgeChange(val) {
      this.userStore.onAgeChange(val);
    },
    onPremiumChangeHandler(val) {
      this.userStore.onPremiumChange(val);
    },
    gotoHome() {
      this.$router.push("/");
    },
    gotoResult() {
      if (this.showAgeError) {
        this.$router.push("/age-error");
      } else {
        this.$router.push("/user-result");
      }
    },
  },
};
</script>
<template>
  <div class="flex flex-col w-[350px] place-self-center">
    <div class="text-sm mb-1">Name</div>
    <input
      v-model="name"
      type="text"
      class="text-sm border-solid border-gray-100 border-2 rounded-md p-2 mb-2"
      placeholder="Add text"
    />

    <div class="text-sm mb-1">Age</div>
    <input
      v-model="age"
      type="number"
      class="text-sm border-solid border-gray-100 border-2 rounded-md p-2 mb-2"
      placeholder="Add text"
      @change="onAgeChange($event.target.value)"
    />

    <div class="text-sm mb-1">Where do you live</div>
    <select
      v-model="currency"
      class="text-sm border-gray-100 border-2 rounded-md p-2 mb-2"
      @change="onLocationChange($event.target.value)"
    >
      <option value="HKD">Hong Kong</option>
      <option value="USD">USA</option>
      <option value="AUD">Australia</option>
    </select>

    <label class="flex flex-col" v-for="(val, key) in premiums" :key="val">
      <div class="text-sm">
        <input
          type="radio"
          :value="val"
          :checked="val == selectedPremium"
          @change="onPremiumChangeHandler($event.target.value)"
        />
        {{ key }}
      </div>
    </label>

    <div class="flex justify-between mt-5">
      <button
        @click="gotoHome"
        class="place-self-center text-xl border border-gray-200 text-black rounded-lg w-[120px] h-[50px]"
      >
        Back
      </button>

      <button
        @click="gotoResult"
        class="place-self-center text-xl bg-black text-white rounded-lg w-[120px] h-[50px]"
      >
        Next
      </button>
    </div>
  </div>
</template>
