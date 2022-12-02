import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className="m-1">
      <Link to={to} className={`nav__link p-2 rounded transition-all hover:primaryLight ${isActive ? 'bg-primaryLight' : ''}`}>
        {children}
      </Link>
    </li>
  )
}

export default CustomLink;