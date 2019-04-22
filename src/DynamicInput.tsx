import * as React from "react"

export interface userPermeablePropzObject {
  [key: string]: any
}
export interface DynamicInputProps {
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

const DynamicInput: React.FC<DynamicInputProps> = ({
  addButtonText = "Add Input",
  setInput,
  input = [],
  submitButtonText = "Submit",
  onSubmit,
  inputName,
  addPosition,
  type = "text",
  placeholderText = "Input..",
  removeText = "Remove"
}) => {
  const addInput = () => {
    setInput([...input, { [inputName]: "" }])
  }
  const removeInput = (index: Number) => {
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
      <div id="DynamicInput">
        {input.map((item, index: number) => (
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
        <button className="submitButton" onClick={() => onSubmit()}>
          {submitButtonText}
        </button>
        <button className="addButton" onClick={() => addInput()}>
          {addButtonText}
        </button>
      </div>
    )
  } else {
    return (
      <div id="DynamicInput">
        <button className="addButton" onClick={() => addInput()}>
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
        <button className="submitButton" onClick={() => onSubmit()}>
          {submitButtonText}
        </button>
      </div>
    )
  }
}

export default DynamicInput
