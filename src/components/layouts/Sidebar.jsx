import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Search } from './';
import { sidebarData } from '../../utils';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div ref={ref}>
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          <FaBars />
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <FaTimes />
          </Link>
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
