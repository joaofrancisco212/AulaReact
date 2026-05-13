export default function Exemplo1( {numero} )
{
    let quadrado, cubo;
    quadrado = Number(numero) * Number(numero);
    cubo = quadrado * Number(numero);

    return (
        <div>
            o quadrado do {numero} é {quadrado}, e o cubo é {cubo};
        </div>
    )
}