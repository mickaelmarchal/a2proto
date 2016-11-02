export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Nice', age: 54 },
      { id: 12, name: 'Narco', age: 24 },
      { id: 13, name: 'Bombasto', age: 22 },
      { id: 14, name: 'Celeritas', age: 18 },
      { id: 15, name: 'Magneta', age: 31 },
      { id: 16, name: 'RubberMan', age: 989 },
      { id: 17, name: 'Dynama', age: 42 },
      { id: 18, name: 'Dr IQ', age: 68 },
      { id: 19, name: 'Magma', age: 12 },
      { id: 20, name: 'Tornado', age: 34 }
    ];

    let login = [
      { id: 'mika', 'username': 'mika', 'password': 'mika'}
    ];


    return { heroes, login };
  }
}
