# Create multiple inputs!

`react-dynamic-input` allows you to create multiple inputs that each have their own unique state that you define. It also comes with a built in `onSubmit` button which takes a function that you ceate. Add it to a form or whatever user input you need!
<br>
<img src="https://github.com/Kyle-Ski/react-dynamic-input/blob/master/examples/Dynamic%20Example.gif" width="650" alt="Example GIF">

## Installation & Usage

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

| Name               | Required | Default     | Type       | Description                                                                                                                                                       |
| ------------------ | -------- | ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputName`        | yes      |             | `string`   | The key you would like to be assigned to the state of each of the inputs that are created                                                                         |
| `addButtonText`    | no       | "Add Input" | `string`   | The text you would like to appear on the button to create another input                                                                                           |
| `setInput`         | yes      |             | `Function` | The [setState](https://reactjs.org/docs/state-and-lifecycle.html) function you would like to be executed when a user types into the input (setState, or useState) |
| `input`            | yes      | `[]`        | `Array`    | The state you will pass to the component. Must be the shape of `[{ [inputName]: ""}]`                                                                             |
| `onSubmit`         | yes      |             | `Function` | The [`onSubmit`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit) function you would like to execute when a user submits the form   |
| `submitButtonText` | no       | "Submit"    | `string`   | The text you would like to appear on the submit button                                                                                                            |
| `addPosition`      | no       | "top"       | `string`   | The position you would like the "Add Input" button to be. "top" will make it above the inputs, "bottom" will place it below and next to the submit button         |
| `type`             | no       | "text"      | `string`   | The [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) of input you would like to use                               |
| `removeText`       | no       | "Remove"    | `string`   | The text you would like to have in the remove input button                                                                                                        |

<br>
<img src="https://github.com/Kyle-Ski/react-dynamic-input/blob/master/examples/Optional%20Examples.gif" width="650" alt="Example GIF">
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

## Contributing

I am open to ideas and improvments! If you have a feature or bug fix [open a PR](https://github.com/Kyle-Ski/react-dynamic-input/pulls) or submit an [issue](https://github.com/Kyle-Ski/react-dynamic-input/issues)! Thank you! 🛰

## To Do

- [x] Changed over to TypeScript to give users better error messages
- [x] Create a button that will add another input
- [x] Give each of the inputs its own value
- [x] Add a remove button that will take away the desired input
- [x] Pass a onSubmit function to component (mauybe just leave this to the user??)
- [x] Make a reusable component that can accept props
- [x] Create GIF of working component
- [ ] Add basic styling for inputs (Styled Components??)
- [x] Publish to NPM
- [ ] (Possible) Add a submit button for eact of the inputs individually to only submit one thing
