import React from 'react'

class Comments extends React.Component {
  render() {
    return (
      <div>
        <h2 className="comments-title">Comments: </h2>
        <textarea className="auto-complete comments">
        </textarea>
      </div>
    )
  }
}

export default Comments
