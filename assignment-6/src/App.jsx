import React from 'react'

import Header from './components/Header';
import Connect from './components/Content';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>
        <Header title="This is Header"  />
        <Connect />
        <Footer title="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."  />
      </div>
    </>
  )
}

export default App
