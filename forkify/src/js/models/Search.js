import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const result = await axios.get(
        'https://api.spoonacular.com/recipes/search',
        {
          params: {
            apiKey: '6fbc9ccd57894a7c8a70004d2c061cb3',
            query: this.query,
          },
        }
      );
      this.result = result.data.results;
      console.log(this.result);
    } catch (error) {
      console.error(error);
    }
  }
}
