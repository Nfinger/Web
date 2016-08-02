import React, { PropTypes as T } from 'react'
import { navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router';
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'

const Links = () =>{
  return(
    <Link to="/home" className="navbar-brand">The Gamer's Den</Link>
  )
}

const OtherLinks = () =>{
  return(
  <ul className="nav navbar-nav navbar-right">
    <li><Link to="articles">Articles</Link></li>
    <li><Link to="players">Players</Link></li>
    <li><Link to="profile">Profile</Link></li>
  </ul>
  
  )
}

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }


  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }
    return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Links />
          </div>        
          <OtherLinks />
        </div>
      </nav>
        {children}
    </div>
    
    )
  }
}

export default Container;
