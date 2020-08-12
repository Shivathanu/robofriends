import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, idx) => {
                    return (
                        <Card 
                            key={idx}
                            name={user.name}
                            email={user.email}
                            id={user.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;
