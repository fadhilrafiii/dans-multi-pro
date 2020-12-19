import React from 'react'
import '../styles/Progress.scss'

const Loading = () => {
    return (
          <progress className="progress is-primary" max="100">30%</progress>
    )
}

export default Loading