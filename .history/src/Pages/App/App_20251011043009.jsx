import React, { use } from 'react';

const App = () => {
     const data = use(appPromise());
     console.log(data);
    return (
        <div>
            <h1>SingleApp</h1>
        </div>
    );
};

export default App;