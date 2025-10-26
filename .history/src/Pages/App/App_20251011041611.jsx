import React, { use } from 'react';

const App = ({appPromise}) => {
    const data = use(app)
    return (
        <div>
            <h1>SingleApp</h1>
        </div>
    );
};

export default App;