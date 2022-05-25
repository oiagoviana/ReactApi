import axios from "axios";
import { useState } from 'react';

export default function Index () {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);
    const [resposta, setReposta] = useState('');

    async function media () {
        const resp = await axios.post('http://localhost:5000/media', 
        {notas: {
            n1: n1,
            n2: n2,
            n3: n3
        }
    });
        setReposta(resp.data.media);
    }

    return (
        <main>
            <h1>Calcular Média</h1>

            <p>Insira o primeiro número: <input type= "text" value= {n1} onChange = {e => setN1(Number(e.target.value))}/></p>
            <p>Insira o segundo número: <input type= "text" value= {n2} onChange = {e => setN2(Number(e.target.value))}/></p>
            <p>Insira o terceiro número: <input type= "text" value= {n3} onChange = {e => setN3(Number(e.target.value))}/></p>

            <div>
                <button onClick = {media}> Calcular </button>
            </div>

            <div>
                A média é: {resposta}
            </div>
        </main>
    );
}