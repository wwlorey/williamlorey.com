// React yells about wrapping emojis correctly so here we are

import React from "react"

export default props => (
  <span role="img" aria-label={props.description}>{props.emoji}</span>
)