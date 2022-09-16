import React from 'react'
import styled from 'styled-components';
import background from '../assets/log.jpg';
function BackgroundImage() {
    return (
        <Container>
         <img src={background} alt="background" />
        </Container>
    )
}

export default BackgroundImage

const Container = styled.div`
 height: 100vh;
 width: 100vh;
img{
    width: 100vw;
    height: 100vh;
}
`;