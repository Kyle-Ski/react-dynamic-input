import * as React from "react"
require("./styles.css")

export interface userPermeablePropzObject {
  [key: string]: any
}
export interface DynamicInputProps {
  addButtonText?: string
  setInput: Function
  input: Array<userPermeablePropzObject>
  submitButtonText?: string
  onSubmit?: Function
  inputName: string
  addPosition?: string
  type?: string
  placeholderText?: string
  placeholderNumbered?: boolean
  removeText?: string
  toolTip?: boolean
  toolTipText?: string
  label?: string
  inputStyle?: React.CSSProperties
  addButtonStyle?: React.CSSProperties
  removeButtonStyle?: React.CSSProperties
  submitButtonStyle?: React.CSSProperties
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  addButtonText = "Add Input",
  setInput,
  input = [],
  submitButtonText = "Submit",
  onSubmit,
  inputName,
  addPosition = "top",
  type = "text",
  placeholderText = "Input..",
  placeholderNumbered = false,
  removeText = "Remove",
  toolTip = false,
  toolTipText,
  label = "",
  inputStyle = {},
  addButtonStyle = {},
  removeButtonStyle = {},
  submitButtonStyle = {}
}) => {
  const addInput = () => {
    setInput([...input, { [inputName]: "" }])
  }
  const removeInput = (index: Number) => {
    if (input.length > 1) {
      const items = input.filter((item, subIndex) => index !== subIndex)
      setInput(items)
    }
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
  return (
    <div id="DynamicInput">
      {label ? <h4 className="dynamicLabel">{label}</h4> : null}
      {addPosition === "top" ? (
        <div>
          {toolTip ? (
            <div className="dynamicTooltip">
              <span className="dynamicTooltipText">{toolTipText}</span>
              <button className="addButton" onClick={() => addInput()} style={addButtonStyle}>
                {addButtonText}
              </button>
            </div>
          ) : (
            <button className="addButton" onClick={() => addInput()} style={addButtonStyle}>
              {addButtonText}
            </button>
          )}
        </div>
      ) : null}
      {input.map((item, index: number) => (
        <div key={(index + 1) * 2}>
          <input
            className="dynamicInput"
            type={type}
            placeholder={
              placeholderNumbered
                ? `${placeholderText} ${index + 1}`
                : placeholderText
            }
            onChange={inputChange(index)}
            value={item[inputName]}
            style={inputStyle}
          />
          <button className="removeButton" onClick={() => removeInput(index)} style={removeButtonStyle}>
            {removeText}
          </button>
        </div>
      ))}
      {onSubmit ? (
        <button className="submitButton" onClick={() => onSubmit()} style={submitButtonStyle}>
          {submitButtonText}
        </button>
      ) : null}
      {addPosition === "bottom" ? (
        <div>
          {toolTip ? (
            <div className="dynamicTooltip">
              <span className="dynamicTooltipText">{toolTipText}</span>
              <button className="addButton" onClick={() => addInput()} style={addButtonStyle}>
                {addButtonText}
              </button>
            </div>
          ) : (
            <button className="addButton" onClick={() => addInput()} style={addButtonStyle}>
              {addButtonText}
            </button>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default DynamicInput
