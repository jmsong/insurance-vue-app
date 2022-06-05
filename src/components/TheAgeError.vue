<script>
export default {
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-around h-[250px] w-[550px] bg-slate-200">
      <h1 class="text-center text-3xl font-bold">Ooops</h1>
      <div class="text-center text-xl">
        Your age is over our accepted limit.<br />
        We are sorry but we cannot insure you now
      </div>
      <button
        @click="gotoHome"
        class="place-self-center text-xl bg-black text-white rounded-lg w-[200px] h-[60px]"
      >
        OK :(
      </button>
    </div>
  </div>
</template>
