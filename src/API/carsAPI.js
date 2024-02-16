import axios from 'axios';

axios.defaults.baseURL = 'https://65cc9620dd519126b83efb57.mockapi.io/api/v1/';

export class CarsAPI {
    config = {
        params: {
            page: 1,
            limit: 12,
        },
    };

    constructor(endpoint = '') {
        this.endpoint = endpoint;
    }

    async get() {
        return axios(`${this.endpoint}`, this.config).then(({ data }) => {
            this.config.params.page += 1;
            return data;
        });
    }

    async getById(id) {
        return axios(`${this.endpoint}/${id}`).then(({ data }) => data);
    }

    currentPage() {
        return this.config.params.page - 1;
    }

  setParams(params) {
      this.config.params.page = 1
        for (const key in params) {
          if (!params[key]) {
            delete this.config.params[key]
            continue
          }
          this.config.params[key] = params[key]
        }
    }

    setConfig(config) {
        for (const key in config) {
            this.config[key] = { ...this.config[key], ...config[key] };
        }
    }
}
