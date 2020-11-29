import React from 'react';
import Card from "../card/Card"
import "./intervalo.css"

export default props => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Minímo: </strong>
                    <input type="number" value={props.min} onChange={e => props.onMinChange(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={props.max} onChange={e => props.onMaxChange(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}