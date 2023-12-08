import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSate, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function CreateUser() {

    const [msg, setMsg] = useSate();
    const [userCriado, setUserCriado] = useState(false);
    const form = useForm();

    const { register, control, handleSubmit, formState } = form;

    const { errors } = formState;

    const submit = async (data) => {

        try {
            const response = await axios.post('http://localhost:3000/create', data);
            setMsg(response.data);
            if (response.data.includes('sucesso'))
                setUserCriado(true);
        } catch (error) {
            setMsg(error.response.data);
        }
    }

    return (
        <>
            <h2>Criando novo usuário</h2>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <label htmlFor="username" placeholder="usuário">Usuário</label>
                <input type="text" id="username" {...register('username')} />
                <p className='erro'>{errors.username?.message}</p>

                <label htmlFor="email" placeholder="email">Email</label>
                <input type="text" id="email" {...register('email')} />
                <p className='erro'>{errors.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register('password')} />
                <p className='erro'>{errors.password?.message}</p>

                <label htmlFor="passwordConf">Confirmar Senha</label>
                <input type="password" id="passwordConf" {...register('passwordConf')} />
                <p className='erro'>{errors.passwordConf?.message}</p>

                <button>Criar Usuário</button>
            </form>

            <p className='server-response'>{msg}</p>
            

        </>
    )
}