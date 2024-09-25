import React from 'react';

const Sidebar = ({menuItems, setSelectedContent }) => {
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
          {menuItems.map((item, index) => (
              
              <li key={index} className='w-100 px-3'>
                <a className="nav-link px-0 align-middle" onClick={() => setSelectedContent(item)}>
                  <i className="fs-4 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline text-white">{item}</span>
                </a>
              </li>

            ))}
      </ul>
    </div>
  );
};

export default Sidebar;
