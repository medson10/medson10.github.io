import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
