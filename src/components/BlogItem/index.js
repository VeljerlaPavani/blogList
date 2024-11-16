// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {description, title, publishedDate} = blogDetails
  return (
    <li className="list-container">
      <div className="balance-container">
        <h1 className="head">{title}</h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}
export default BlogItem
