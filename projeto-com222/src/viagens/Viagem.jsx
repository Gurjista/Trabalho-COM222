export default function Viagem({viagem}) {
    return (
        <ul>
            <h2>Local da Viagem: {viagem.local}</h2>
            <p>{viagem.descricao}</p>
        </ul>
    )
}