import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Item } from 'react-bootstrap/Carousel';


class ImageCarousel extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }  

  render() {
    const { index, direction } = this.state;
    const { images } = this.props;
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {images.map(image => (
          <Item>
            <img
              className="d-block w-100"
              src={image}
              alt="First slide"
            />
          </Item>
        ))}
      </Carousel>
    );
  }
}

export default ImageCarousel;