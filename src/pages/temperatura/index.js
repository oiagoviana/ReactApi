import axios from "axios";
import { useState } from 'react';

export default function Index () {
    const [temp, setTemp] = useState(0);
    const [resposta, setReposta] = useState(false);

    async function febre () {
        const resp = await axios.get(`http://localhost:5000/temperatura?t=${temp}`, temp);
        setReposta(resp.data.febre);
    }

    return(
        <main>
            <h1>febre</h1>

            Insira a temperatura: <input type="text" value={temp} onChange= {e => setTemp(Number(e.target.value))} />
            <button onClick={febre}> Verificar </button>

            <div>
                Febre: {resposta}
            </div>
        </main>
    );
}