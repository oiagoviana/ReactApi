import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'
import Dobro from './pages/dobro'
import Somarget from './pages/somarget'
import Somarpost from './pages/somarpost'
import Tabuada from './pages/tabuada'

export default function siteRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= '/' element={<Home />}  />
                <Route path= '/corPrimaria' element={<CorPrimaria />}  />
                <Route path= '/frequencia' element={<Frequencia />}  />
                <Route path= '/ingresso' element={<Ingresso />}  />
                <Route path= '/maiorNumero' element={<MaiorNumero />}  />
                <Route path= '/dobro' element={<Dobro />}  />
                <Route path= '/somarget' element={<Somarget />}  />
                <Route path= '/somarpost' element={<Somarpost />}  />
                <Route path= '/tabuada' element={<Tabuada />}  />
            </Routes>
        </BrowserRouter>
    )
}