import React from 'react';
import { Link } from 'react-router-dom';

function TopNavbar() {
  return (
    <div>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>SignUp</Link>
    </div>
  )
}

export default TopNavbar