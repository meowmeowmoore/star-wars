export default class SwapiService {

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

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`)
      .then((planetInfo) => planetInfo);
    return {
      id,
      name: planet.name,
      rotationPeriod: planet.rotation_period,
      population: planet.population,
      diameter: planet.diameter,
    }
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}
