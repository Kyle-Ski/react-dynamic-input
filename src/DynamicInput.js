import React from "react"

const DynamicInput = ({
  addButtonText = "Add Input",
  setInput,
  input = [],
  submitButtonText = "Submit",
  onSubmit,
  inputName,
  addPosition
}) => {
  const addInput = e => {
    e.preventDefault()
    setInput([...input, { name: "" }])
  }
  const removeInput = index => e => {
    e.preventDefault()
    const items = input.filter((item, subIndex) => index !== subIndex)
    setInput(items)
  }

  const inputChange = index => e => {
    const elements = input.map((element, subIndex) => {
      if (index !== subIndex) {
        return element
      } else {
        return { ...element, [inputName]: e.target.value }
      }
    })
    setInput(elements)
  }
  if (addPosition === "bottom") {
    return (
      <div className="DynamicInput">
        {input.map((item, index) => (
          <div key={(index + 1) * 2}>
            <input
              type="text"
              placeholder="text here..."
              onChange={inputChange(index)}
              value={item[inputName]}
            />
            <button onClick={removeInput(index)}>Remove</button>
          </div>
        ))}
        <button onClick={onSubmit}>{submitButtonText}</button>
        <button onClick={addInput}>{addButtonText}</button>
      </div>
    )
  } else {
    return (
      <div className="DynamicInput">
        <button onClick={addInput}>{addButtonText}</button>
        {input.map((item, index) => (
          <div key={(index + 1) * 2}>
            <input
              type="text"
              placeholder="text here..."
              onChange={inputChange(index)}
              value={item[inputName]}
            />
            <button onClick={removeInput(index)}>Remove</button>
          </div>
        ))}
        <button onClick={onSubmit}>{submitButtonText}</button>
      </div>
    )
  }
}

export default DynamicInput
