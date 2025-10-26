import React from 'react';
import heroimage from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <h1>We Build
            <span className='4xl font-extrabold bg-purple-700'>Productive </span>  Apps</h1>
             <p1>At SoftNext, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>
             Our goal is to turn your ideas into digital experiences that truly make an impact.</p1>
             <div>
                <button>Google Play</button>
                 <button>App Store</button>
             </div>
             <div>
                <img class='w-3/12' src={heroimage}/>
             </div>
        </div>
    );
};

export default Banner;