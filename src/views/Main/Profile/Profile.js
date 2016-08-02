import React, { PropTypes as T } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import styles from './styles.module.css'
import AuthService from 'utils/AuthService'

export class ProfileDetails extends React.Component {
  static propTypes = {
    profile: T.object,
    auth: T.instanceOf(AuthService)
  }
  static contextTypes = {
    router: T.object
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  render(){
        const { profile } = this.state
        let now = new Date()
    return (
      <div className={styles.root}>
        <Row>
          <Col md={2} mdOffset={5}>
            <Image src={profile.picture} circle/>
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3}>
            <h3>Profile</h3>
            <p><strong>Name: </strong> {profile.name}</p>
            <p><strong>Email: </strong> {profile.email}</p>
            <p><strong>Nickname: </strong> {profile.nickname}</p>
            <p><strong>Created At: </strong> {profile.created_at}</p>
            <p><strong>Updated At: </strong> {profile.updated_at}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProfileDetails;