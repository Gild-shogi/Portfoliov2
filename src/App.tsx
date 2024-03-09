import Content from './component/parts/contents'
import NavBar from './component/templates/navbar'
import Hitory from './component/views/history'
import Production from './component/views/production'
import Profile from './component/views/profile'
import Publications from './component/views/publications'
import Skills from './component/views/skills'


function App() {

  return (
    <>
    <NavBar />
    <Profile />
    <Content name="Skills" id="Skills" />
    <Skills />
    <Content name="Products" id="Products" />
    <Production />
    <Content name="Publication" id="Publication" />
    <Publications />
    <Content name="History" id="History" />
    <Hitory />
    </>
  )
}

export default App
