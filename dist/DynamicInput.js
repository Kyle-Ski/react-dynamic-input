import React from "react"

const DynamicInput = ({
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
  const addInput = e => {
    e.preventDefault()
    setInput([
      ...input,
      {
        name: ""
      }
    ])
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
    return React.createElement(
      "div",
      {
        className: "DynamicInput"
      },
      input.map((item, index) =>
        React.createElement(
          "div",
          {
            key: (index + 1) * 2
          },
          React.createElement("input", {
            className: "dynamicInput",
            type: type,
            placeholder: placeholderText,
            onChange: inputChange(index),
            value: item[inputName]
          }),
          React.createElement(
            "button",
            {
              className: "removeButton",
              onClick: removeInput(index)
            },
            removeText
          )
        )
      ),
      React.createElement(
        "button",
        {
          className: "submitButton",
          onClick: onSubmit
        },
        submitButtonText
      ),
      React.createElement(
        "button",
        {
          className: "addButton",
          onClick: addInput
        },
        addButtonText
      )
    )
  } else {
    return React.createElement(
      "div",
      {
        className: "DynamicInput"
      },
      React.createElement(
        "button",
        {
          className: "addButton",
          onClick: addInput
        },
        addButtonText
      ),
      input.map((item, index) =>
        React.createElement(
          "div",
          {
            key: (index + 1) * 2
          },
          React.createElement("input", {
            className: "dynamicInput",
            type: type,
            placeholder: placeholderText,
            onChange: inputChange(index),
            value: item[inputName]
          }),
          React.createElement(
            "button",
            {
              className: "removeButton",
              onClick: removeInput(index)
            },
            removeText
          )
        )
      ),
      React.createElement(
        "button",
        {
          className: "submitButton",
          onClick: onSubmit
        },
        submitButtonText
      )
    )
  }
}

export default DynamicInput
