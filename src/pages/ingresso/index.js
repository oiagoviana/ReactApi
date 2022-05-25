import axios from 'axios';
import {useState} from 'react'

export default function Index(){
    const [inteira, setInteira] = useState(0);
    const [meia, setMeia] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [valor, setValor] = useState(0);

    async function Calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', {
            inteira:inteira,
            meia:meia,
            diaSemana:diaSemana,
            nacionalidade:nacionalidade 
        })
        setValor(resp.data.total)
    }

    return (
        <main>
            <h1>Ingresso</h1>

        <div>
            Inteiras: <input type='text' value={inteira} onChange={e => setInteira(Number(e.target.value))} />
        </div>

        <div>
            Meia: <input type='text' value={meia} onChange={e => setMeia(Number(e.target.value))}  />
        </div>

        <div>
            Dia da Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)}  />
        </div>

        <div>
            Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
        </div>

        <div>
            <button onClick={Calcular}> Calcular</button>
        </div>

        <div>
            O total é R$ {valor}
        </div>
        
        </main>
    )
}