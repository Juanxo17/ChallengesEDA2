import React from 'react';

function Reclamos({ reclamos }) {
    return (
        <div>
            <h3>Reclamos</h3>
            {reclamos.size() === 0 ? (
                <p>No hay reclamos.</p>
            ) : (
                <ul>
                    {reclamos.items.map((reclamo, index) => (
                        <li key={index}>{reclamo}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Reclamos;