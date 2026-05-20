export default function Exercicio2( {peso, altura} )
{

    let imc = Number(peso) / Number(altura) * Number(altura);
    return (
        <div>
            Peso: {peso}kg 
            Altura: {altura}m
            O imc = {imc}.    

        </div>
    )
}
