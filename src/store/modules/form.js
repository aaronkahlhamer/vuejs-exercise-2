const state = {
  fullName: {
    type: 'string',
    title: 'Full Name',
    attrs: {
      type: 'text',
      placeholder: 'Enter your full name',
    },
    required: true,
    value: '',
    pattern: '',
    errorMessage: 'Please enter your full name',
    showErrorMessage: false,
  },
  email: {
    type: 'string',
    title: 'Email',
    attrs: {
      type: 'email',
      placeholder: 'Enter your email address',
    },
    required: true,
    value: '',
    pattern: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
    errorMessage: 'Please enter a valid email address',
    showErrorMessage: false,
  },
};

const mutations = {
  UPDATE_VALUE: (state, details) => {
    state.email.value = details.userInputEmail;
    state.email.showErrorMessage = details.showErrorMessage;
  },
};

const methods = {
  validateUserInput: (userInputEmail, pattern) => !new RegExp(pattern).test(userInputEmail),
};

const actions = {
  updateValue: ({ commit }, { userInputEmail, $store }) => {
    const { pattern } = $store.state.form.email;
    const showErrorMessage = methods.validateUserInput(userInputEmail, pattern);
    commit('UPDATE_VALUE', { userInputEmail, showErrorMessage });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  methods,
  actions,
};
