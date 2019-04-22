# Dynamically Created Inputs (Currently under Construction 👷‍♂️)

## Create multiple inputs!

`react-dynamic-input` allows you to create multiple inputs that each have their own unique state that you define. It also comes with a built in `onSubmit` button which takes a function that you ceate.
<br>
<img src="https://github.com/Kyle-Ski/react-dynamic-input/blob/master/Dynamic%20Example.gif" width="650" alt="Example GIF">

## Installation & Usage (WIP)

1. `npm i react-dynamic-input`

2. Add `DynamicInput` to your components like this:

```js
import DynamicInput from "react-dynamic-input"

class YourComponent extends React.Component {
  render() {
    return <DynamicInput />
  }
}
```

3.  `props` for the `<DynamicInput/>`:

| Name | Default | Type | Description | Required |
| ------------------ | ----------- | ---------- | | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `inputName` | | `string` | The key you would like to be assigned to the state of each of the inputs that are created | no |
| `addButtonText` | "Add Input" | `string` | The text you would like to appear on the button to create another input | no |
| `setInput` | | `function` | The setState function you would like to be executed when a user types into the input (setState, or useState) | yes |
| `input` | | `Array` | The state you will pass to the component. Must be the shape of `[{inputName: ""}]` | yes |
| `onSubmit` | | `Function` | The onSubmit function you would like to execute when a user submits the form | yes |
| `submitButtonText` | "Submit" | `string` | The text you would like to appear on the submit button | no |
| `addPosition` | "top" | `string` | The position you would like the "Add Input" button to be. "top" will make it above the inputs, "bottom" will place it below and next to the submit button | no |
| `type` | "text" | `string` | The `type` of input you would like to have | no |
| `placeholderText` | "Input.." | `string` | The text you would like to have as a placeholder for the inputs | no |
| `removeText` | "Remove" | `string` | The text you would like to have in the remove input button | no |

## Example

```js
import React, { useState } from "react"
import DynamicInput from "react-dynamic-input"

const App = () => {
  const [input, setInput] = useState([{ name: "" }])

  const showState = () => {
    alert(input.map(item => item.name))
  }
  return (
    <div>
      <DynamicInput
        inputName="name"
        addButtonText="Add Another Input"
        setInput={setInput}
        input={input}
        onSubmit={showState}
        submitButtonText="Submit"
        addPosition="bottom"
      />
      {input.map((item, index) => (
        <p key={(index + 1) * 2}>{item.name}</p>
      ))}
    </div>
  )
}

export default App
```

## Styling

_Each of the Elements in the `react-dynamic-input` Component can be targeted througn CSS with a `className` attribute:_

- **Enitre Component:**

```css
#DynamicInput {
  /* Add whatever CSS you'd like! */
}
```

- **Add Button:**

```css
.addButton {
  /* Add whatever CSS you'd like! */
}
```

- **Remove Button:**

```css
.removeButton {
  /* Add whatever CSS you'd like! */
}
```

- **Submit Button:**

```css
.submitButton {
  /* Add whatever CSS you'd like! */
}
```

- **Input:**

```css
.dynamicInput {
  /* Add whatever CSS you'd like! */
}
```

## To Do

- [x] Changed over to TypeScript to give users better error messages
- [x] Create a button that will add another input
- [x] Give each of the inputs its own value
- [x] Add a remove button that will take away the desired input
- [x] Pass a onSubmit function to component (mauybe just leave this to the user??)
- [x] Make a reusable component that can accept props
- [ ] Create GIF of working component
- [ ] Add basic styling for inputs (Styled Components??)
- [ ] Publish to NPM
- [ ] (Possible) Add a submit button for eact of the inputs individually to only submit one thing
