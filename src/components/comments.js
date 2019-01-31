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
      <h3>Hypothesis Comments</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        className="commentBox"
        style={style}
        markup="@[__display__](__type__:__id__)"
        placeholder={"Mention people using '@'"}
      >
        <Mention
          type="user"
          trigger="@"
          data={data}
          renderSuggestion={(suggestion, search, highlightedDisplay) => (
            <div className="user">{highlightedDisplay}</div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />
      </MentionsInput>
      <button>Submit</button>
    </div>
  )
}

const asExample = provideExampleValue(
  "Use the @ to mention other users in your comment"
)

export default asExample(Comments)
