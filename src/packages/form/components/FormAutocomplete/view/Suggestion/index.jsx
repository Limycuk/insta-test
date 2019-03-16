import React from 'react'

import MenuItem from '@material-ui/core/MenuItem'

function Suggestion(suggestion, { isHighlighted }) {
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {suggestion.splitedLabel.map((part, index) =>
          part.isHighlighted ? (
            <span key={String(index)} style={{ fontWeight: 600 }}>
              {part.value}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.value}
            </strong>
          ),
        )}
      </div>
    </MenuItem>
  )
}

export default Suggestion
