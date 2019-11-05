import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class ImagesLoader extends Component {
  render() {
    return (
      <div>
        <LoadingSpinnerWrapper>
          <LoadingSpinnerImage imageSource={this.props.spinnerImageSource} />
        </LoadingSpinnerWrapper>

        {this.props.imageSources.map((imageSource, index) => {
          return (
            <Image
              src={imageSource}
              id={`${this.props.imagesName}-${index}`}
              onLoad={this.props.imageLoadHandler}
              key={index}
            />
          )
        })}
      </div>
    );
  }
}


const rotate360 = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Image = styled.img`
  display: block;
`;


const LoadingSpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  background-color: #f0e1c8;

  display: flex;
  justify-content: center;
  align-items: center;
`;


const LoadingSpinnerImage = styled.img.attrs({
  src: props => props.imageSource
})`
  animation: ${rotate360} 3000ms linear infinite;
`;


export default ImagesLoader;
