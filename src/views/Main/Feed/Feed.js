import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import Rebase from 're-base'
import Posts from "./Post"
import Time from 'react-time'


const base = Rebase.createClass("https://gamersden-cd0d8.firebaseio.com/")




export class Feed extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        posts: []
      }
    }

  componentDidMount(){
    this.init()
  }
  componentWillReceiveProps(nextProps){
    base.removeBinding(this.ref);
    this.init();
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  init(){
    this.ref = base.syncState("Feed", {
      context: this,
      asArray: true,
      state: 'posts'
    })
  }
  handleAddPost(newPost){
    let now = Date().split(' ')[1] + ' ' + Date().split(' ')[2] + ' ' + Date().split(' ')[4].split(":",2)[0]+':'+Date().split(' ')[4].split(":",2)[1]
    base.post("Feed", {
      data: this.state.posts.concat([{
        author: this.props.username,
        post: newPost,
        timestamp: now}])
    })
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  render(){
    return (
      <div className={styles.root}>
        <Posts
            username={this.props.username}
            posts={this.state.posts}
            addPost={(newPost) => this.handleAddPost(newPost)} />
      </div>
    )
  }
}

export default Feed;