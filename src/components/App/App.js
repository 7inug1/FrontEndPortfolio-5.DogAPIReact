import React from 'react';
import axios from 'axios';
import Chooser from '../Chooser/Chooser.js';
import Details from '../Detail/Details.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      current: undefined,
    };

    this.chooseDog = this.chooseDog.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => {
        const arrayOfBreeds = Object.keys(res.data.message);
        this.setState({ dogs: arrayOfBreeds, current: arrayOfBreeds[0] });
      })
      .catch((error) => console.log(error));
  }

  chooseDog(dog) {
    this.setState({ current: dog });
  }

  render() {
    return (
      <>
        <header>
          <div className="header_title-container">
            {/* <img
              id="header_title_dog-logo"
              src="./images/dog.png"
              width="45px"
              height="45px"
              alt="dog logo"
            ></img> */}
            <h1 id="header_title">React Dog App</h1>
          </div>
          <div className="header_subtitle-container">
            <p id="header_subtitle">All the dogs in the world!</p>
          </div>
        </header>

        <body>
          <Chooser dogs={this.state.dogs} chooseDog={this.chooseDog} />
          <Details current={this.state.current} />
          <footer>
            <p>&copy; 2021 Jinwook Shin</p>
          </footer>
        </body>
      </>
    );
  }
}
