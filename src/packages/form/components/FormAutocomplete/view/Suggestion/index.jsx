import React from 'react'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'

import MenuItem from '@material-ui/core/MenuItem'

function Suggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query)
  const parts = parse(suggestion.label, matches)

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 600 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          ),
        )}
      </div>
    </MenuItem>
  )
}

export default Suggestion
