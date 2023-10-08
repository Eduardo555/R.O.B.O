function CabecaCard (props:{rotacao: string, inclinacao: string}) {
    return (
        <>
            <div className="card text-start w-50" style={{left:"200px"}}>
                <div className="card-header text-nowrap">
                    <strong>Cabeça</strong>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-nowrap">Rotação: {props.rotacao}</li>
                    <li className="list-group-item text-nowrap">Inclinação: {props.inclinacao}</li>
                </ul>
            </div>
        </>
    )
}
export default CabecaCard