import * as React from 'react'
import styled from '@emotion/styled'

import { Page } from '../components/Page'
import { Container } from '../components/Container'
import { IndexLayout } from '../layouts'

const Title = styled.h1`
  color: #fff;
  text-align: center;
  line-height: 1.5;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Title>My name is Medson Oliveira and I'm Fullstack Developer</Title>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
