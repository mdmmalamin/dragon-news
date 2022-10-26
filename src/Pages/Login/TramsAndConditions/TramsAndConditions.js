import React from 'react';
import { Link } from 'react-router-dom';

const TramsAndConditions = () => {
    return (
        <div>
            <h3>This is Trems And Conditions Page</h3>
            <p>Go to back <Link to='/register'>register</Link></p>
        </div>
    );
};

export default TramsAndConditions;