import React from 'react'
import { merge } from 'lodash'
import { Mention, MentionsInput } from 'react-mentions'

import { provideExampleValue } from './higher-order'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

function Comments({ value, data, onChange, onAdd }) {

  let style = merge({}, defaultStyle, {
    input: {
      overflow: 'auto',
      height: 300,
    },
  })

  return (
    <div className="comments">
      <h3 className="comments-title">Hypothesis Comments</h3>
      <MentionsInput
        value={value}
        onChange={onChange}
        className="commentBox"
        style={style}
        markup="@[__id__](__type__:__id__)"
        placeholder={"Mention people using '@'"}
      >
        <Mention
          type="user"
          trigger="@"
          data={data}
          renderSuggestion={(suggestion, search, highlightedDisplay, index) => (
            <div className="user">
              <img className="gravatar" src={data[index].avatar_url} alt="gravatar" />
              {highlightedDisplay}
            </div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />
      </MentionsInput>
      <button onClick={function() {alert('Thank you for your comment!')}}>Submit</button>
    </div>
  )
}

const asExample = provideExampleValue(
  ""
)

export default asExample(Comments)
