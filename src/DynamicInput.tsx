import React from "react"

export interface userPermeablePropzObject {
  [key: string]: any
}
export type DynamicInputProps = {
  addButtonText?: string
  setInput: Function
  input: Array<userPermeablePropzObject>
  submitButtonText?: string
  onSubmit: Function
  inputName: string
  addPosition?: string
  type?: string
  placeholderText?: string
  removeText?: string
}

// export type mapItem = {
//   [key: string]: string
// }
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
}: DynamicInputProps) => {
  const addInput = (e: Event) => {
    e.preventDefault()
    setInput([...input, { name: "" }])
  }
  const removeInput = (index: Number) => (e: Event) => {
    e.preventDefault()
    const items = input.filter((item, subIndex) => index !== subIndex)
    setInput(items)
  }

  const inputChange = (index: Number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
            <button className="removeButton" onClick={() => removeInput(index)}>
              {removeText}
            </button>
          </div>
        ))}
        <button className="submitButton" onClick={onSubmit()}>
          {submitButtonText}
        </button>
        <button className="addButton" onClick={() => addInput}>
          {addButtonText}
        </button>
      </div>
    )
  } else {
    return (
      <div className="DynamicInput">
        <button className="addButton" onClick={() => addInput}>
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
            <button className="removeButton" onClick={() => removeInput(index)}>
              {removeText}
            </button>
          </div>
        ))}
        <button className="submitButton" onClick={onSubmit()}>
          {submitButtonText}
        </button>
      </div>
    )
  }
}

export default DynamicInput
