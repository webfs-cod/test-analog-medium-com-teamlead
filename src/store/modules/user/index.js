import * as type from './types';
import actions from './actions';

const state = {
    userMe: {},
    userId: '',
    users: {}
};

const mutations = {
    [type.GET_USER_ME](state, payload) {
        state.userMe = payload;
        state.userId = payload.id;
        localStorage.setItem('id', payload.id)
    },
    [type.GET_USERS](state, payload) {
        state.users = payload;
    },
    [type.LOGOUT](state, payload) {
        localStorage.setItem('id', 0);
        state.userMe = {};
        state.userId = '';
    },
};

const getters = {
    userMe: state => {
        return state.userMe;
    },
    userId: state => {
        return state.userId;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
