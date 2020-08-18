<template>
  <div class="home">

    <div class="card"
         v-for="(post, index )  in paginatedItems"
         :key="index">
      <header class="card-header">
        <p class="card-header-title">
          {{ post.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ post.description }}
          <br>
          <time datetime="2016-1-1">{{ post.createdAt }}</time>
        </div>
      </div>
      <footer class="card-footer">
        <b-button class="card-footer-item card-footer-button"
                  @click="counter(post.id, index)"
                  v-if="userMe.role === 'reader'"
        >Like {{post.claps}}</b-button>
        <router-link :to="{name: 'edit', params: {id: post.id}}" v-show="userMe.role === 'writer'" class="card-footer-item">Edit</router-link>
        <b-button class="card-footer-item card-footer-button" v-show="userMe.role === 'writer'" @click="deletePost(post.id, index)">Delete</b-button>
      </footer>
    </div>

    <hr>

    <b-pagination
            v-if="posts.length > 10"
            :total="posts.length"
            :current.sync="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
    </b-pagination>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      total: 20,
      current: 1,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: 'is-centered',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      allPosts: [],
      items: [],

    }
  },
    beforeMount(){
      this.$store.dispatch('getPosts').then(data => {
        return data;
      });

    },
    computed: {
      ...mapGetters([
        'userMe',
        'posts',
      ]),
        paginatedItems() {
            let page_number = this.current-1;
            return this.posts.slice(page_number * this.perPage, (page_number + 1) * this.perPage);
        }
    },
  methods:{
    deletePost(id, index) {
      let data = {
        id: id,
        index: index
      };
      this.$store.dispatch('deletePost', data).then(data => {
        return data
      })
    },
    counter(id, index) {
      this.posts[index].claps++;
      let data = {
        id: id,
        elem: this.posts[index]
      };
      this.$store.dispatch('increaseClaps', data).then(data => {
        return data;
      })
    }
  }
}
</script>

<style scoped>
  .card{
    max-width: 500px;
    margin: 20px auto;
  }
  .card-footer-button{
    height: auto;
    border: unset;
    border-radius: 0;
    color: #7957d5;
  }
  .card-footer-button:hover{
    color: #000000;
  }
  .card-footer-item{
    max-width: 33%;
  }
  .card-footer-item:first-child{
    border-left: 1px solid #dbdbdb;
  }
  .card-footer{
    justify-content: flex-end;
  }
  .card-content{
    position: relative;
    padding: 1.5rem 1.5rem 2rem 1.5rem;
  }
  time{
    position: absolute;
    left: 0.5rem;
    bottom: 0;
    color: #9c9c9c;
      font-size: 14px;
  }
  .pagination{
    max-width: 80%;
    margin: 0 auto;
    padding: 0 0 10px 0;
  }
</style>
