
## Hypothesis Technical Assignment

This project is an implementation of a theoretical @mention system for the
Hypothesis commenting ecosystem. It was built as a re-usable react component
that can be imported and used in existing webapps that use react.

The underlying library used to power the suggestion system is: https://github.com/signavio/react-mentions

### Installing the project locally

Clone the repository onto your local computer:

`git clone git@github.com:tpolischuk/hypothesis-autocomplete.git hypothesis-autocomplete`

Install the dependencies

`cd hypothesis-autocomplete`

`npm install`

Start the local web server

`npm start`

Navigate to http://localhost:3000/ in your browser to view the demo.

### Usage

Import the Comments component included in the project.

`import Comments from './components/comments/comments';`

Import your data from a remote or local source:

`const users = [{
    "id": "pturner0",
    "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
    "display": "Paula Turner"
  },
  {
    "id": "pdixon1",
    "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
    "display": "Patrick Dixon"
  },
  {
    "id": "mhansen2",
    "avatar_url": "https://secure.gravatar.com/avatar/15442f219c2c472e0f1572aacc1cdfd7?d=mm",
    "display": "Michael Hansen"
  }]`

  Then load the comment component in your render method

  `render() {
    return (
      <div>
        <Comments data={users} />
      <div>
    );
  }`
