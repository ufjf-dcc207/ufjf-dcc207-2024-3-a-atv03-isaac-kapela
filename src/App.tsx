import Animal from './Animal'
import './App.css'

function App() {
 

  return (
    <>
      <div className='app'>

        <Animal icone="🦁" nome ="leao" peso={140} extincao={true} ></Animal>
        <Animal icone='🦒' nome= "girafa" peso={400} extincao={true}></Animal>
        <Animal icone="🐻" nome="urso" peso={200} extincao={true}></Animal>

      </div>
    </>
  )
}

export default App
