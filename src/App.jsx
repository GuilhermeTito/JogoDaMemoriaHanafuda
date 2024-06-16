import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './views/tela-inicial';
import TelaJogo from './views/tela-jogo';

function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<TelaInicial/>}></Route>
            <Route path='jogo-da-memoria' element={<TelaJogo/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App