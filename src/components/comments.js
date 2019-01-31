import React from 'react'

class Comments extends React.Component {

  handleChange = (event) => {
    if (event.key == "@") {
      // Do Autocomplete Lookup
    }
  }

  handleSubmit = () => {
    //Handle Submit
  }


  render() {
    return (
      <div>
        <h2 className="comments-title">Comments: </h2>
        <textarea className="auto-complete comments" onKeyDown={this.handleChange}>
        </textarea>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Comments
