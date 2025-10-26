import React, { useEffect, useState } from 'react';

const Apps = () => {
    const [allApps , setAllApps] =useState([]);

    // useEffect(() =>{
    //     fetch.("appData.json")
    //     .then(res => res.json())
    //     then(data =>{
    //         setAllApps(data)
    //     })
    // },[])

    const appPromise = fetch('/appsData.json').then(res => res.)
    return (
        <div>
            <h1>Hello ami Books</h1>
        </div>
    );
};

export default Apps;
