
import './App.css'


import Example from './component/Example'
import Comes from './component/Comes'


import { FooterWithSocialLinks } from './component/FooterWithSocialLinks'

import Example1 from './component/Example1'
import Example2 from './component/Example2'
import { StickyNavbar } from './component/navList'

function App() {


  return (
    <>
      <StickyNavbar/>
      <Example1/>
      <Example />
      <Example2/>
      <Comes/>
      <FooterWithSocialLinks />
    </>
  )
}

export default App
