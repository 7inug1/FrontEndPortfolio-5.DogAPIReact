import React from 'react';

export default class DetailViews extends React.Component {
  render() {
    return (
      <>
        <div className="details_dog-gallery">
          <div className="details_dog-gallery_main_container">
            <p className="details_dog-gallery_main_caption">메인 갤러리</p>
            <div className="details_dog-gallery_main">
              <img
                src={this.props.formProps.images.slice(0, 1)}
                alt="details dog gallery main dog image"
              ></img>
            </div>
          </div>
          <div className="details_dog-gallery_sub_container">
            <p className="details_dog-gallery_sub_caption">서브 갤러리</p>
            <div className="details_dog-gallery_sub">
              <ul>
                {this.props.formProps.images
                  .slice(1, this.props.formProps.number)
                  .map((image) => (
                    <li key={image}>
                      <img src={image} alt="Dog Image" />
                    </li>
                  ))}
              </ul>
            </div>
            <form id="dogNumberOfImagesController">
              <label>
                <p id="numberOfImagesText"></p>
                <input
                  id="dogNumberOfImagesInput"
                  type="number"
                  min="1"
                  max={this.props.formProps.images.length}
                  value={this.props.formProps.number}
                  onChange={this.props.formProps.handleNumberChange}
                />
              </label>
            </form>
          </div>
        </div>
      </>
    );
  }
}
