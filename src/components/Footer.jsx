import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/red', label: 'Red' },
    { path: '/blue', label: 'Blue' },
  ];

  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', display: 'flex', justifyContent: 'center' }}>
      <nav>
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            style={{
              padding: '5px 10px',
              margin: '0 5px',
              textDecoration: 'none',
              color: location.pathname === route.path ? '#fff' : '#333',
              backgroundColor: location.pathname === route.path ? '#333' : 'transparent',
            }}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
