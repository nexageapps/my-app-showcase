import { useNavigate, useLocation } from 'react-router-dom';

export default function ScrollLink({ to, children, className, onClick, style }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    
    // If we're already on the home page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    if (onClick) onClick(e);
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
