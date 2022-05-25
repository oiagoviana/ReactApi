import axios from "axios";
import { useState } from 'react';


export default function Index () {
    const [numero, setNumero] = useState(0);
    const [resposta, setReposta] = useState([]);

    async function tabuada () {
        const resp = await axios.get('http://localhost:5000/tabuada/' + numero );
        setReposta(resp.data.tabuada)
    }

    return (
        <main>
            <h1>Tabuada</h1>

            Insira um número: <input type='text' value= {numero} onChange = {e => setNumero(Number(e.target.value))} /> 
            <button onClick= {tabuada}>Calcular</button>

            <div>
                A tabuada é: {resposta}
            </div>
        </main>
    );
}