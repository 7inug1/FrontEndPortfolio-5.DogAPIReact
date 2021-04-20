import React from 'react';

export default class Chooser extends React.Component {
  render() {
    return (
      <>
        <div className="chooser">
          <h2 id="chooser_title">Dog List</h2>
          <input type="checkbox" id="nav-toggle" class="nav-toggle" />
          <nav>
            <ul id="chooser_dog-list">
              {this.props.dogs.map((dog) => (
                <li key={dog}>
                  <button onClick={() => this.props.chooseDog(dog)}>
                    {dog}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <label for="nav-toggle" class="nav-toggle-label">
            <span></span>
          </label>
        </div>
      </>
    );
  }
}
