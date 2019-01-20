import React from 'react'
import styled from 'styled-components'

import avatar from './assets/images/profile_picture.jpg'
import { Primary, Accent, White } from './Theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Primary};
  min-height: 90vh;
  padding-top: 10vh;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 5vh;

  @media only screen and (max-device-width: 812px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
  }
`

const Title = styled.h1`
  color: ${White};
  width: 100%;
  text-align: center;
  font-family: 'Saraburn', sans-serif;

  @media only screen and (max-device-width: 812px) {
    font-size: 1.4rem;
  }
`

const Subtitle = styled.h2`
  color: ${Accent};
  width: 100%;
  text-align: center;
  font-family: 'Saraburn', sans-serif;
  font-weight: 700;

  @media only screen and (max-device-width: 812px) {
    font-size: 1.2rem;
  }
`

const Link = styled.a`
  font-size: 1.2rem;
  color: ${Accent};
  font-family: 'Source Sans Pro', sans-serif;
  text-decoration: none;
  cursor: pointer;
  margin: 8px;
  transition: color 400ms ease-in-out;

  :hover {
    color: ${White};
  }

  @media only screen and (max-device-width: 812px) {
    font-size: 1rem;
  }
`

const Avatar = styled.img`
  height: 45vh;
  align-self: center;
  border-radius: 5px;
`

const App = () => (
  <Wrapper>
    <Avatar src={avatar} />
    <Title>My name is Medson Oliveira</Title>
    <Subtitle>I'm a Full Stack Developer</Subtitle>
    <Footer>
      <Link href="https://github.com/medson10">Github</Link>
      <Link href="https://twitter.com/o_medson">Twitter</Link>
      <Link href="https://medium.com/@medson.oliveira.jr">Medium</Link>
      <Link href="https://speakerdeck.com/medson10">Speaker Deck</Link>
    </Footer>
  </Wrapper>
)

export default App
