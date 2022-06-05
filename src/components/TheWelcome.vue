<script>
export default {
  methods: {
    gotoUserInfo() {
      this.$router.push("/user-info");
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-around h-[250px] w-[550px] bg-slate-200">
      <h1 class="text-center text-3xl font-bold">Hello There!</h1>
      <div class="text-center text-xl">
        Let's buy some insurance. It is going to take only a few steps
      </div>
      <button
        @click="gotoUserInfo"
        class="place-self-center text-xl bg-black text-white rounded-lg w-[200px] h-[60px]"
      >
        Start
      </button>
    </div>
  </div>
</template>
