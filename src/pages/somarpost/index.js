import { useState } from "react"
import axios from 'axios'

export default function Index(){
    const [numeroUm, setNumeroUm] = useState(0);
    const [numeroDois, setNumeroDois] = useState(0);
    const [resp, setResp] = useState(0);

    async function calcular(){
        const resp = await axios.post('http://localhost:5000/somar',{
            a: numeroUm,
            b:numeroDois 
        });
        
        
        setResp(resp.data.soma)
    }


    return (
        <main>
            <h1>Somar (POST)</h1>

            <div>
                Insira um número: <input type='text' value={numeroUm} onChange={e => setNumeroUm(Number(e.target.value))} />
            </div>

            <div>
                Insira outro número: <input type='text' value={numeroDois} onChange={e => setNumeroDois(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={calcular}> Calcular </button>
            </div>

            <div>
                Resultado: {resp}
            </div>
        </main>
    )
}