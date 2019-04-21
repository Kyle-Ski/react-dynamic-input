import React, { useState } from "react"
import DynamicInput from "./DynamicInput"

const App = () => {
  const [input, setInput] = useState([{ name: "" }])

  const showState = () => {
    return console.log(input)
  }
  return (
    <div>
      <DynamicInput
        inputName="name"
        addButtonText="Add Inlasjdfput"
        setInput={setInput}
        input={input}
        onSubmit={showState}
        submitButtonText="Submit"
        addPosition="bottom"
        placeholderText="Text here.."
        removeText="remove"
      />
      {input.map(item => (
        <p>{item.name}</p>
      ))}
    </div>
  )
}

export default App
