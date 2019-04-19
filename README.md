# Dynamically Created Inputs (Currently under Construction 👷‍♂️)

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
    
| Name               	| Default     	| Type       	| Description                                                                                                                                               	|   	|
|--------------------	|-------------	|------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------	|---	|
| `inputName`        	|             	| `String`   	| The key you would like to be assigned to the state of each of the inputs that are created                                                                 	|   	|
| `addButtonText`     	| "Add Input" 	| `String`   	| The text you would like to appear on the button to create another input                                                                                   	|   	|
| `setInput`         	|             	| `function` 	| The setState function you would like to be executed when a user types into the input (setState, or useState)                                              	|   	|
| `input`            	|             	| `Array`    	| The state you will pass to the component. Must be the shape of `[{inputName: ""}]`                                                                        	|   	|
| `onSubmit`         	|             	| `function` 	| The onSubmit function you would like to execute when a user submits the form                                                                              	|   	|
| `submitButtonText` 	| "Submit"    	| `String`   	| The text you would like to appear on the submit button                                                                                                    	|   	|
| `addPosition`      	| "top"       	| `String`   	| The position you would like the "Add Input" button to be. "top" will make it above the inputs, "bottom" will place it below and next to the submit button 	|   	|
