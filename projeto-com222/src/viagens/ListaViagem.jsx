import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Disciplina from "./Disciplina";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function ListaViagem(){
    const [validado, setValidado] = useState(false);
    const [formData, setFormData] = useState({
        sigla : ' '
    })

    const form = useForm();
    const { register, handleSubmit } = form;

    const handleButtonClick = () =>{
        return <Navigate to = '/edit-user' />
    }


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
        
        <button onClick={handleButtonClick}>Editar cadastro</button>
        
        </>
    )
}