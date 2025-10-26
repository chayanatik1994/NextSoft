import React from 'react';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
28        <div className="navbar-start">
29          <div className="dropdown">
30            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
31              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
32                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
33              </svg>
34            </div>
35            <ul
36              tabIndex={0}
37              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
38              {links}
39            </ul>
40          </div>
41          <div className='flex items-center'>
42            <img src={logo} alt='Logo' className='h-8'/>
43            <a className="text-xl font-bold text-purple-600">NexSoft</a>
44          </div>
45        </div>
46        <div className="navbar-center hidden lg:flex">
47          <ul className="menu menu-horizontal px-1">
48            {links}
49          </ul>
50        </div>
51        <div className="navbar-end">
52          <a
53            href="https://github.com/chayanatik1994/Nexsoft"
54            target="_blank"
55            className="btn bg-purple-700 text-white hover:bg-purple-800 px-4 py-2 text-sm md:text-base ml-8 flex items-center gap-2 rounded-sm"
56          >
57            <FontAwesomeIcon icon={faGithub} />
58            Contribute
59          </a>
60        </div>
61      </div>

    );
};

export default Navbar;
