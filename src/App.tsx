import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px 14px;
  @media (min-width: 768px) {
    padding: 32px;
  }
`

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  )
}

export default App
