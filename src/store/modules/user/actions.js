import * as type from './types';
import api from '@/api';

const actions = {
    getUserMe({commit}, payload) {

        return new Promise((resolve, reject) => {
            api.get('/users/' + payload)
                .then(res => {
                    commit(type.GET_USER_ME, res.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log('Problem', error.message);
                    reject(error);
                });
        })
    },
    Authorization({commit}) {
        return new Promise((resolve, reject) => {
            api.get('/users')
              .then(res => {
                  commit(type.GET_USERS, res.data);
                  resolve(res.data);
              })
              .catch(error => {
                  console.log('Problem', error.message);
                  reject(error);
              });
        })
    },
    logout({commit}) {
          commit(type.LOGOUT);
    },
};

export default actions;
