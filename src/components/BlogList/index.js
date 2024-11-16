import {Component} from 'react'
// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul className="unorder">
        {blogsList.map(eachItem => (
          <BlogItem blogDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
