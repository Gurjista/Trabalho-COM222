import { useEffect, useState } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import Viagem from "./Viagem";

export default function ListaViagem(){
    const [validado, setValidado] = useState(false);
    const [formData, setFormData] = useState({
        local : ' '
    })

    const form = useForm();
    const { register, handleSubmit } = form;

    const submit = (data) => {
        setFormData({...formData, ...data});
    }

    const config = {
        headers:{
            'Authorization' : 'Bearer '.concat(sessionStorage.getItem('token'))
        }
    }
    
    useEffect(() => {

        async function valida(){
            try{
                const resposta = await axios.get(`http://localhost:3000/viagens`,config);
                console.log(resposta);
                if(resposta.status === 200)
                    setValidado(true);
            }catch(error){
                setValidado(false);
            }
        }
        valida();
    }, []);

    if(!validado){
        return <p>Token Inválido</p>
    }

    return(
        <>
            <h1>BEM VINDO FUNCIONÁRIO, PROCURE SOBRE UMA VIAGEM OU DEIXE VAZIO PARA APRESENTAR TODAS</h1>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <label htmlFor = "local" placeholder="local">LOCAL: </label>
                <input type="text" id="local" {...register('local')} />
            <button>Listar</button>

            </form>
            <BuscaViagem formData={formData} config={config}/>
        </>
    )
      
}
export function BuscaViagem({formData, config}){
    const [msg, setMsg] = useState('');
    const [viagens, setViagens] = useState(<p>...</p>);
    const view = [];

    useEffect(() => {

        const submit = async () => {
            let endPoint = 'http://localhost:3000/viagens';
            endPoint = `${endPoint}/${formData.local}`
            try{
                const dados = await axios.get(`${endPoint}`, config);
                if(Array.isArray(dados.data)){
                    for(let viagem of dados.data){
                        view.push(<Viagem viagem={viagem} />);
                    }
                }else{
                    view.push(<Viagem viagem={dados.data} />);
                }
                setViagens(view);
                setMsg('');
            }catch(error){
                setMsg(error.response.data);
                setViagens(<p></p>);
                
            }
        }
        submit();
    }, [formData]);

    return(
        <>
            {viagens}
            {msg}
        </>
    )
}