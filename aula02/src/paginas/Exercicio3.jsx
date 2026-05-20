export default function Exercicio3( {not1, not2} )
{

    let media = (not1 + not2) / 2;
    return (
        <div>
            
        Nota 1: {not1} <hr />
        Nota 2: {not2} <hr />
        Media = {media} <hr />

        </div>
    )
}