import React, { useState } from "react"
import DynamicInput from "./DynamicInput"

const App = () => {
  const [input, setInput] = useState([{ name: "" }])

  const showState = () => {
    alert(input.map(item => item.name))
  }
  return (
    <div>
      <DynamicInput
        inputName="name"
        addButtonText="Add Input"
        setInput={setInput}
        input={input}
        onSubmit={showState}
        submitButtonText="Submit"
        addPosition="bottom"
        placeholderText="Text here.."
        removeText="remove"
        test="clu"
      />
      {input.map(item => (
        <p>{item.name}</p>
      ))}
    </div>
  )
}

export default App
