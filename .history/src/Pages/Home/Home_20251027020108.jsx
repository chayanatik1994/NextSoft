import React from 'react';

const HomePage = () => (
  <div style={{ padding: '20px' }}>
    {/* Banner */}
    <section style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1>Welcome to the App Store</h1>
      <p>Discover the best apps for your device</p>
      <div>
        <button onClick={() => window.location.href='https://www.apple.com/app-store/'} style={{ marginRight: '10px' }}>App Store</button>
        <button onClick={() => window.location.href='https://play.google.com/store'}>Play Store</button>
      </div>
    </section>


    {/* Top Apps */}
    <section>
      <h2>Top Apps</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
     
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }} onClick={() => window.location.href='/app/1'}>
            <img src="" alt="App" style={{ width: '100%' }} />
            <h3>App {index + 1}</h3>
            <p>Downloads: 1M</p>
            <p>Rating: ★★★★☆</p>
          </div>
        ))}
      </div>
      <button style={{ marginTop: '20px' }} onClick={() => window.location.href='/apps'}>Show All</button>
    </section>
  </div>
);

export default HomePage;