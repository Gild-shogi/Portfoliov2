import Content from './component/parts/contents'
import Hitory from './component/views/history'
import Profile from './component/views/profile'
import Skills from './component/views/skills'

function App() {
  return (
    <>
    <Profile />
    <Content name="Skills" id="Skills" />
    <Skills />
    <Content name="History" id="history" />
    <Hitory /> 
    </>
  )
}

export default App
