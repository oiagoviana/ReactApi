import axios from "axios";
import { useState } from 'react'

export default function Index(){
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [resposta, setReposta] = useState('');

    function adicionar () {
        setNumeros([...numeros, numero]);
        setNumero('');
    }

    async function verificarMaior () {
        const resp = await axios.post('http://localhost:5000/dia2/maiornumero', numeros);
        setReposta(resp.data.maior);
    }

    return (
        <main>
            <h1>Maior Número</h1>

            <div>
                Número: <input type="text" value={numero} onChange= {e => setNumero(Number(e.target.value))}/>
                <button onClick={adicionar}>Adicionar Número</button>
            </div>
           
           <div>
               {numeros.map(item =>
                <div>{item}</div>
                )}
           </div>

           <div>
               <button onClick={verificarMaior}>Verificar</button> Maior número é {resposta}
           </div>
        </main>
    )
}

