import React from 'react';

const CategoryDetailsPage = ({ params }) => {
    console.log(params.items);
    return (
        <div>
            <p>Category details page</p>
            {
                params.items.map((item, idx) => <p key={idx}>{item}</p>)
            }
        </div>
    );
};

export default CategoryDetailsPage;