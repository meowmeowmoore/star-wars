class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error (`Could not fetch ${url}` + ` received ${res.status} `);
    }
    return await res.json();
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getStarship(3).then((p) => {
  console.log(p.name)
})

// swapi.getAllPeople().then((people) => {
//   people.forEach((p) => {
//     console.log(p.name)
//   })
// })
