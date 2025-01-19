import './style/App.css'
import { AppProvider } from './Context/Datacontext'
import Addemploye from './components/Addemploye'
import Tablelist from './components/Tablelist'
import Updateemploye from './components/Updateemploye'

function App() {

  return (
    <>
    <AppProvider>
       <Addemploye/>
       <Tablelist/>
       <Updateemploye/>
    </AppProvider>
    </>
  )
}

export default App
