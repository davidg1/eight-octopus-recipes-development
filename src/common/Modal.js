import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


const scaleLargetoSmall = keyframes`
  from {
    transform: translate(-50%, -50%) scale(2);
  }

  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const rocking = keyframes`
  from {
    transform: rotate(0);
  }

  25% {
    transform: rotate(10deg);
  }

  75% {
    transform: rotate(-10deg);
  }

  to {
    transform: rotate(0);
  }
`;


class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notShownPreviously: true
    }

    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.setState({notShownPreviously: false});
  }


  render() {
    return (
      <div>
        <ModalOverlay
          show={this.state.notShownPreviously && this.props.show}
          backgroundColor={this.props.overlayBackgroundColor}
        />
        <ModalContent
          backgroundColor={this.props.contentBackgroundColor}
          show={this.state.notShownPreviously && this.props.show}
        >
          {this.props.children}
          <ModalButton
            onClick={this.props.buttonClickHandler}
            id={`${this.props.modalName}-button`}
          />
        </ModalContent>
      </div>
    );
  }
}


const ModalOverlay = styled.div`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'rgba(0, 0, 0, .8)'};

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 80;

  display: ${props => (props.show ? 'block' : 'none')};
`;


const ModalContent = styled.div`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  width: 90%;
  max-width: 900px;
  max-height: 100%;
  overflow: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 90;

  display: ${props => (props.show ? 'block' : 'none')};

  animation: ${scaleLargetoSmall} 1500ms;
`;


const ModalButton = styled.div`
  background-image: url("/assets/images/octopus-modal-button.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 37px;
  height: 37px;
  cursor: pointer;

  position absolute;
  top: 7px;
  right: 7px;

  &:hover {
    transform-origin: 50% top;
    animation: ${rocking} 1000ms linear infinite;
  }
`;


export default Modal;
