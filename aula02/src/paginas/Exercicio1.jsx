export default function Exercicio1( {fahrenheit} )
{
    let celsius;
    celsius = (fahrenheit - 32) * 5 /9;

    return (
        <div>
          celsius é igual a {celsius}
        </div>
    )
}