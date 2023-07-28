import Content from './component/parts/contents'
import Hitory from './component/views/history'
import Production from './component/views/production'
import Profile from './component/views/profile'
import Skills from './component/views/skills'

function App() {
  
  return (
    <>
    <Profile />
    <Content name="Skills" id="Skills" />
    <Skills />
    <Content name="Production" id="production" />
    <Production />
    <Content name="History" id="history" />
    <Hitory /> 
    </>
  )
}

export default App
