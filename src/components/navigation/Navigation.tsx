import React from 'react';
import { NavLink } from './NavLink';
import { navigationLinks } from '../../constants/navigation';

interface NavigationProps {
  className?: string;
  itemClassName?: string;
}

export function Navigation({ className = '', itemClassName = '' }: NavigationProps) {
  return (
    <div className={className}>
      {navigationLinks.map((link) => (
        <NavLink 
          key={link.href} 
          href={link.href}
          className={itemClassName}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}