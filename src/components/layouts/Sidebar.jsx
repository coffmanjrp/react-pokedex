import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Search } from './';
import { sidebarData } from '../../utils';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          {sidebar ? <FaTimes /> : <FaBars />}
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <Search />
            {sidebarData !== null &&
              sidebarData.map((data, index) => (
                <li key={index} className="nav-text">
                  <Link to={data.path} onClick={showSidebar}>
                    {data.icon} <span>{data.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
