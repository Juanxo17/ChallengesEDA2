import React, { useState, useEffect } from 'react';
import Graph from '../Graph';
import Person from '../Person';
import City from '../City';
import { Graph as D3Graph } from 'react-d3-graph';

function FriendGraph() {
  const [graph] = useState(new Graph());
  const [cities, setCities] = useState({});
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [selectedCity, setSelectedCity] = useState("");
  const [cityResidents, setCityResidents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    friend: ''
  });

  useEffect(() => {
    initializeGraph();
  }, []);

  const initializeGraph = () => {
    const newCities = {
      "New York": new City("New York"),
      "Los Angeles": new City("Los Angeles"),
      "Chicago": new City("Chicago"),
      "Houston": new City("Houston")
    };

    setCities(newCities);

    const john = new Person("John", 25, newCities["New York"]);
    const alice = new Person("Alice", 30, newCities["Los Angeles"]);
    const bob = new Person("Bob", 22, newCities["Chicago"]);
    const emma = new Person("Emma", 28, newCities["New York"]);
    const david = new Person("David", 35, newCities["Houston"]);

    newCities["New York"].addResident(john);
    newCities["Los Angeles"].addResident(alice);
    newCities["Chicago"].addResident(bob);
    newCities["New York"].addResident(emma);
    newCities["Houston"].addResident(david);

    graph.addNode(john);
    graph.addNode(alice);
    graph.addNode(bob);
    graph.addNode(emma);
    graph.addNode(david);

    graph.addEdge(john, alice);
    graph.addEdge(alice, bob);
    graph.addEdge(bob, emma);
    graph.addEdge(emma, john);
    graph.addEdge(john, david);

    updateGraphData();
  };
  const updateGraphData = () => {
    const nodes = graph.nodes.map(person => ({
      id: person.name,
      size: 350,
      labelProperty: "name",
      color: "#4285F4",
      label: person.name,
    }));

    const links = [];
    graph.nodes.forEach(person => {
      const neighbors = graph.adjList[person] || [];
      neighbors.forEach(neighbor => {
        links.push({
          source: person.name,
          target: neighbor.name
        });
      });
    });

    setGraphData({ nodes, links });
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    if (city && cities[city]) {
      setCityResidents(cities[city].getResidents());
    } else {
      setCityResidents([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, city, friend } = formData;
    
    if (!name || !age || !city) return;
    
    if (!cities[city]) {
      const newCity = new City(city);
      setCities(prev => ({ ...prev, [city]: newCity }));
    }
    
    const newPerson = new Person(name, parseInt(age), cities[city] || new City(city));
    
    if (cities[city]) {
      cities[city].addResident(newPerson);
    }
    
    graph.addNode(newPerson);
    
    if (friend) {
      const friendPerson = graph.nodes.find(p => p.name === friend);
      if (friendPerson) {
        graph.addEdge(newPerson, friendPerson);
      }
    }
    
    updateGraphData();
    setFormData({ name: '', age: '', city: '', friend: '' });
  };
  const graphConfig = {
    nodeHighlightBehavior: true,
    directed: false,
    node: {
      color: "#4285F4",
      size: 350,
      highlightStrokeColor: "#3367D6",
      fontSize: 14,
      fontColor: "#333",
      highlightFontSize: 16,
      labelPosition: "center",
    },
    link: {
      highlightColor: "#3367D6",
      color: "#9BB7F0",
      strokeWidth: 2,
    },
    height: 500,
    width: 800,
  };

  return (
    <div className="friend-graph-container">
      <h1>Challenge 16: Friend & City Graph Visualization</h1>
      <p className="description">Create connections between people and visualize their relationships and cities</p>
      
      <div className="form-section">
        <h2>Add a Person</h2>
        <form onSubmit={handleSubmit}>          <div className="form-group">
            <label>Person's Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter full name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Person's Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age (e.g., 25)"
              required
            />
          </div>
          
          <div className="form-group">
            <label>City of Residence:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter city name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Connect with Friend (optional):</label>
            <select name="friend" value={formData.friend} onChange={handleInputChange}>
              <option value="">Select a friend to connect with</option>
              {graph.nodes.map((person, index) => (
                <option key={index} value={person.name}>
                  {person.name}
                </option>
              ))}
            </select>
          </div>
          
          <button type="submit">Add Person</button>
        </form>
      </div>
      
      <div className="city-section">
        <h2>People by City</h2>
        <div className="city-selector">
          <label>Select City: </label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {Object.keys(cities).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        
        {selectedCity && (
          <div className="residents-list">
            <h3>Residents of {selectedCity}</h3>
            <ul>
              {cityResidents.map((person, index) => (
                <li key={index}>
                  {person.name} - {person.age} years old
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="graph-section">
        <h2>Friend Graph Visualization</h2>
        {graphData.nodes.length > 0 && (
          <D3Graph
            id="friend-graph"
            data={graphData}
            config={graphConfig}
          />
        )}
      </div>
    </div>
  );
}

export default FriendGraph;
