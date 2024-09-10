import { NavLink as RouterNavLink } from 'react-router-dom';

export default function NavLink({ to, label, className = '' }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => `inline-flex ${className} ${isActive ? 'active text-customPink' : 'text-black'}`}
    >
      {label}
    </RouterNavLink>
  );
}
