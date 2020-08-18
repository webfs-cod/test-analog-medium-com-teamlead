import * as type from './types';
import api from '@/api';

const actions = {
  getPosts({commit}){
    return new Promise((resolve, reject) => {
      api.get('/posts')
        .then(res => {
          commit(type.GET_POSTS, res.data);
          resolve(res.data);
        })
        .catch(error => {
          console.log('Problem', error.message);
          reject(error);
        });
    })
  },
  deletePost({commit}, payload){
    return new Promise((resolve, reject) => {
      api.delete('/posts/' + payload.id)
        .then(res => {
          commit(type.DELETE_POST, payload.index);
          resolve(res.data);
        })
        .catch(error => {
          console.log('Problem', error.message);
          reject(error);
        });
    })
  },
  increaseClaps({commit}, payload){
    return new Promise((resolve, reject) => {
      api.patch('/posts/' + payload.id, payload.elem)
        .then(res => {
          commit(type.INCREASE_CLAPS, payload.elem);
          resolve(res.data);
        })
        .catch(error => {
          console.log('Problem', error.message);
          reject(error);
        });
    })
  },
  createPost({commit}, payload){
    return new Promise((resolve, reject) => {
      api.post('/posts', payload)
        .then(res => {
          commit(type.ADD_POST, res.data);
          resolve(res.data);
        })
        .catch(error => {
          console.log('Problem', error.message);
          reject(error);
        });
    })
  },
  getSinglePost({commit}, payload){
    return new Promise((resolve, reject) => {
      api.get('/posts/' + payload)
        .then(res => {
          commit(type.GET_POST, res.data);
          resolve(res.data);
        })
        .catch(error => {
          console.log('Problem', error.message);
          reject(error);
        });
    })
  },
  saveRedactedPost({commit}, payload){
    return new Promise((resolve, reject) => {
      api.patch('/posts/' + payload.id, payload)
        .then(res => {
          commit(type.SAVE_REDACTED_POST, payload);
          resolve(res.data);
        })
        .catch(error => {
          console.log('Problem', error.message);
          reject(error);
        });
    })
  },
};

export default actions;
