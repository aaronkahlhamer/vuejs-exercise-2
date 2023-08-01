<script setup>
import form from '../store/modules/form';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const { email } = form.state;
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://v2.vuejs.org/">Vue 2</a>.
    </h3>
    <br />
    <p>My email is {{ email.value && !email.showErrorMessage ? email.value : 'unknown' }}!</p>
    <br />

    <form novalidate @submit.prevent="submitForm">
      <label :for="email.attrs.type">Email</label><br />
      <input
        :id="email.attrs.type"
        v-model="userInputEmail"
        :type="email.attrs.type"
        :placeholder="email.attrs.placeholder"
      /><br />
      <p :style="email.showErrorMessage ? 'color: red;' : 'display: none;'">
        {{ email.errorMessage }}
      </p>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInputEmail: '',
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch('form/updateValue', this);
    },
  },
};
</script>

<style scoped>
h1 {
  top: -10px;
  font-size: 2.6rem;
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (width >= 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
