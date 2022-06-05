<script>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";

export default {
  setup() {
    const userStore = useUserStore();
    const { name, age, location, currency } = storeToRefs(userStore);

    return {
      name,
      age,
      location,
      currency,
      userStore,
    };
  },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    gotoUserInfo() {
      this.$router.push("/user-info");
    },
  },
};
</script>
<template>
  <div class="flex flex-col w-[350px] place-self-center text-center">
    <h1 class="text-lg mb-1 font-bold">{{ name }},</h1>
    <div class="text-sm mb-1">Name: {{ name }}</div>
    <div class="text-sm mb-1">Age: {{ age }}</div>
    <div class="text-sm mb-1">Where do you live: {{ location }}</div>
    <div class="text-sm mb-1">Package: {{ userStore.premiumPackage }}</div>
    <div class="text-sm mb-1">
      Premium: {{ `${userStore.finalFee}${currency}` }}
    </div>

    <div class="flex justify-between mt-5">
      <button
        @click="gotoUserInfo"
        class="place-self-center text-xl border border-gray-200 text-black rounded-lg w-[120px] h-[50px]"
      >
        Back
      </button>

      <button
        @click="gotoHome"
        class="place-self-center text-xl bg-black text-white rounded-lg w-[120px] h-[50px]"
      >
        Buy
      </button>
    </div>
  </div>
</template>
