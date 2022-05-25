import { useState } from "react"
import axios from 'axios'

export default function Index(){
    const [dobro, setDobro] = useState(0);
    const [resp, setResp] = useState(0);


        async function calcular(){
            const resp = await axios.get('http://localhost:5000/dobro/' + dobro);
            setResp(resp.data.dobro)
        }

    return (
        <main>
            <h1>Dobro</h1>
        
        <div>
            Insira um número: <input type='text' value={dobro} onChange={e => setDobro(Number(e.target.value))} />
        </div>

        <div>
            <button onClick={calcular}>Calcular</button>
        </div>

        <div>
            O dobro é: {resp}
        </div>
        </main>
    )
    }