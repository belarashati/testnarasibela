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
  set_headline(state, data) {
    state.headline.data = data.res;
  },
  set_article(state, data) {
    state.article.data = data.res;
  },
  set_headline_list(state, data) {
    state.headlineList.data = data;
  },
  set_terpopuler_list(state, data) {
    state.terpopulerList.data = data;
  },
  set_pilihan_narasi(state, data) {
    state.narasiList.data = data;
  },
  set_article_list(state, data) {
    state.articleList.data = data;
  },
};

export const actions = {
  async getMainHeadline({ commit }) {
    await this.$axios
      .$get(`http://localhost:3001/headline`)
      .then((response) => {
        commit('set_headline', {
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
        commit("set_article", {
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
        commit("set_headline_list", response);
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
        commit("set_terpopuler_list", response);
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
        commit('set_pilihan_narasi', response);
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
        commit("set_article_list", response);
        return response;
      })
      .catch((e) => {
        return e.response;
      });
  },
};
