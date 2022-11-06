<template>
  <div>
    <form @submit.prevent="signUp">
      <h1>user-regist</h1>
      <input type="text" placeholder="Email" v-model="email">
      <strong>{{ emailErrMsg }}</strong>
      <input type="text" placeholder="Email" v-model="password">
      <strong>{{ passwordErrMsg }}</strong>
      <input :class="{ errInput: passwordConfirmation }" type="password" placeholder="Confirmation Password" v-model="passwordConfirmation">
      <strong>{{ passwordConfirmationErrMsg }}</strong>
    </form>
    <button
      type="submit"
      :disabled="isSubmit"
    >
      {{ signUpButton }}
    </button>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
</style>

