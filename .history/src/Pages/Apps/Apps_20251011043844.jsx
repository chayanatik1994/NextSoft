import React, { Suspense, useState } from 'react';

const Apps = ({data}) => {
    const [allApps , setAllApps] =useState([]);

    // useEffect(() =>{
    //     fetch.("appData.json")
    //     .then(res => res.json())
    //     then(data =>{
    //         setAllApps(data)
    //     })
    // },[])

    // const appPromise = fetch('/appsData.json').then(res => res.json())
    return (
        <div>
    <h1 className="text-3xl text-center">Apps</h1>
    <Suspense fallback={<span>Loading...</span>}>
    
   {
    data.map(( singleBook) =><App key='{}'></App>)
   }
    </Suspense>
  </div>
    );
};

export default Apps;
