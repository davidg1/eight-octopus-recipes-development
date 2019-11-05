import React, { Component } from 'react';
import styled from 'styled-components';


class VideoPlayer extends Component {
  render() {
    // props.sources is an array of objects.  Each object has a src property and a type property)
    const sourceElements = this.props.sources.map(({src, type, id}) =>
      (<source src={src} type={type} key={id} />)
    );

    return (
      <Video {...this.props}>
        {sourceElements}
      </Video>
    );
  }
}


const Video = styled.video.attrs({
  controlsList: 'nodownload nofullscreen'
})`
   width: ${({ width }) => width ? width : 'auto'};
   height: ${({ height }) => height ? height : 'auto'};
   outline: none;
`;


export default VideoPlayer;
