import React from 'react';

const amountBox = ({header ,bg, amount}) => {
    return (
        <div className="col">
            <div className="card">
                <div className={`card-header text-white bg-${bg}`}>
                    {header}
                </div>
                <div className="card-body">
                    $ {amount}
                </div>
            </div>
        </div>
    )
}

export default amountBox
