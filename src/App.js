import React from "react";
import "./App.css";

const data = [
  { id: 1, title: "London", content: "London is the capital city of England." },
  { id: 2, title: "Paris", content: "Paris is the capital of France." },
  { id: 3, title: "Tokyo", content: "Tokyo is the capital of Japan." },
  { id: 4, title: "Phoenix", content: "Phoenix is the capital of Arizona." },
  {
    id: 5,
    title: "Sacramento",
    content: "Sacramento is the capital of California.",
  },
  {
    id: 6,
    title: "Montgomery",
    content: "Montgomery is the capital of Alabama.",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeId: 1,
    };
  }
  changeActiveId = (id) => {
    this.setState({ activeId: id });
  };
  render() {
    const filtered = data.filter((city) => city.id === this.state.activeId);
    console.log(filtered);
    console.log(this.state.activeId);
    return (
      <div className="App">
        <div className="cities">
          {data.map((item) => {
            return (
              <div
                className="city"
                onClick={() => this.changeActiveId(item.id)}
              >
                <div
                  className={this.state.activeId === item.id ? "active" : ""}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="about">
          <h2>{filtered[0].title}</h2>
          <p>{filtered[0].content}</p>
        </div>
      </div>
    );
  }
}

export default App;
