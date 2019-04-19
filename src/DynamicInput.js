import React from "react"

const DynamicInput = ({
  addButtonText = "Add Input",
  setInput,
  input,
  submitButtonText = "Submit",
  onSubmit,
  inputName,
  addPosition,
  type = "text",
  placeholderText = "Input..",
  removeText = "Remove"
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
              className="dynamicInput"
              type={type}
              placeholder={placeholderText}
              onChange={inputChange(index)}
              value={item[inputName]}
            />
            <button className="removeButton" onClick={removeInput(index)}>
              {removeText}
            </button>
          </div>
        ))}
        <button className="submitButton" onClick={onSubmit}>
          {submitButtonText}
        </button>
        <button className="addButton" onClick={addInput}>
          {addButtonText}
        </button>
      </div>
    )
  } else {
    return (
      <div className="DynamicInput">
        <button className="addButton" onClick={addInput}>
          {addButtonText}
        </button>
        {input.map((item, index) => (
          <div key={(index + 1) * 2}>
            <input
              className="dynamicInput"
              type={type}
              placeholder={placeholderText}
              onChange={inputChange(index)}
              value={item[inputName]}
            />
            <button className="removeButton" onClick={removeInput(index)}>
              {removeText}
            </button>
          </div>
        ))}
        <button className="submitButton" onClick={onSubmit}>
          {submitButtonText}
        </button>
      </div>
    )
  }
}

export default DynamicInput
