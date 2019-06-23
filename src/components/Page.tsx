import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  background: #000;
`

interface PageProps {
  className?: string
}

export const Page: React.SFC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
