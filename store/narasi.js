export const state = () => ({
  headline: {
    data: {},
  },
  article: {
    data: {},
  },
  headlineList: {
    data: [],
  },
  articleList: {
    data: [],
  },
  terpopulerList: {
    data: [],
  },
  narasiList: {
    data: [],
  },
});

export const mutations = {
  HEADLINE(state, data) {
    state.headline.data = data.res;
  },
  ARTICLE(state, data) {
    state.article.data = data.res;
  },
  HEADLINE_SWIPER(state, data) {
    state.headlineList.data = data;
  },
  TERPOPULER(state, data) {
    state.terpopulerList.data = data;
  },
  PILIHAN_NARASI(state, data) {
    state.narasiList.data = data;
  },
  ARTICLE_LIST(state, data) {
    state.articleList.data = data;
  },
};

export const actions = {
  async getMainHeadline({ commit }) {
    await this.$axios
      .$get(`http://localhost:3001/headline`)
      .then((response) => {
        console.log(response);
        commit('HEADLINE', {
          res: response,
          onResponse: response.completed,
        });
        return response;
      })
      .catch((e) => {
        return e.response;
      });
  },
  async getMainArticle({ commit }) {
    await this.$axios
      .$get(`http://localhost:3001/artikel`)
      .then((response) => {
        console.log(response);
        commit("ARTICLE", {
          res: response,
          onResponse: response.completed,
        });
        return response;
      })
      .catch((e) => {
        return e.response;
      });
  },
  async getHeadlineList({ commit }) {
    await this.$axios
      .$get(`http://localhost:3001/headline_swiper`)
      .then((response) => {
        console.log(response);
        commit("HEADLINE_SWIPER", response);
        return response;
      })
      .catch((e) => {
        return e.response;
      });
  },
  async getTerpopuler({ commit }) {
    await this.$axios
      .$get(`http://localhost:3001/terpopuler`)
      .then((response) => {
        console.log(response);
        commit("TERPOPULER", response);
        return response;
      })
      .catch((e) => {
        return e.response;
      });
  },
  async getPilihanNarasi({ commit }) {
    await this.$axios
      .$get(`http://localhost:3001/pilihan_narasi`)
      .then((response) => {
        console.log(response);
        commit('PILIHAN_NARASI', response);
        return response;
      })
      .catch((e) => {
        return e.response;
      });
  },
  async getArticleList({ commit }) {
    await this.$axios
      .$get(`http://localhost:3001/artikellist`)
      .then((response) => {
        console.log(response);
        commit("ARTICLE_LIST", response);
        return response;
      })
      .catch((e) => {
        return e.response;
      });
  },
};
