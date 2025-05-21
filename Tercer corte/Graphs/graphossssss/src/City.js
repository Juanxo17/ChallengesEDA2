class City {
  constructor(name) {
    this.name = name;
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }

  getResidents() {
    return this.residents;
  }
}

export default City;
