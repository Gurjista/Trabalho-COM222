export default function Viagem({viagem}) {
    return (
        <ul>
            <h2>Local da Viagem: {viagem.local}</h2>
            <p>Data: {viagem.descricao}</p>
            <p>Duração: {viagem.duracao}</p>
            <p>Preço: {viagem.preco}</p>
            <p>Requisição de Visto: {viagem.visto}</p>
        </ul>
    )
}