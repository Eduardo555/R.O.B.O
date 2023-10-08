function BracoCard(props:{title: string, cotovelo: string, pulso: string}) {
    return (
        <>
            <div className="card text-start">
                <div className="card-header text-nowrap">
                    <strong>{props.title}</strong>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-nowrap">Cotovelo: {props.cotovelo}</li>
                    <li className="list-group-item text-nowrap">Pulso: {props.pulso}</li>
                </ul>
            </div>
        </>
    )
}

export default BracoCard