// Header.js
import React from 'react';

function Header({ onSearch }) {

  
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <ul className="nav bg-dark p-3">
      <li className="nav-item text-info bold ms-3">Home</li>
      <li>
        <input
          type="text"
          placeholder="Search products by title"
          className='rounded ps-2'
          style={{ width: '800px', height: "38px", marginLeft: "200px", marginTop: "15px" }}
          onChange={handleInputChange}
        />
      </li>
    </ul>
  );
}

export default Header;
