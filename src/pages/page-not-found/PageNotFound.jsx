import { Link } from 'react-router'
import './PageNotFound.css'

export function PageNotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-text">
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="notfound-btn">
        Go Home
      </Link>
    </div>
  )
}