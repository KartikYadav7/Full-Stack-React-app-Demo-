import React from 'react'

const Button = ({ text, className, type }) => {
  return (
    <button type={type}
      className={`w-full border border-blue-400 p-2 bg-blue-500 hover:bg-blue-600 rounded-xl ${className}`}>
      {text}
    </button>
  )
}

export default Button
