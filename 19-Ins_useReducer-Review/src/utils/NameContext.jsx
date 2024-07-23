import { createContext, useContext, useReducer } from 'react';

// Import our reducer
import { reducer } from './reducers';

// Create our theme context using createContext()
export const NameContext = createContext();
const { Provider } = NameContext;

// Create a custom hook that allows easy access to our NameContext values
export const useName = () => useContext(NameContext);
// useName is a custom hook that uses the useContext hook to access the NameContext values.

// Creating our theme provider. Accepts an argument of "props"
export default function NameProvider(props) {
  //why do we need to pass the context?
  // The context is passed as a prop to the Provider component so that the Provider component can be used to wrap other components in the application. This allows the components to access the context value using the useContext hook.
  const initialState = {
    name: '1337user',
    isValid: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // what does the useReducer hook do?
  // useReducer is a hook that is used for state management in React. It accepts a reducer function and an initial state value, and returns the current state value paired with a dispatch method. The dispatch method is used to update the state value by passing an action object to the reducer function.

  return <Provider value={[state, dispatch]} {...props} />;
  // what does the Provider component do?
  // The Provider component is used to wrap other components in the application so that they can access the context value using the useContext hook. It accepts a value prop that is passed to the context provider, and any children components that are wrapped by the Provider component will have access to the context value.
}

/* the useReducer hook is used to manage the state of the application. 
It accepts a reducer function and an initial state value, 
and returns the current state value paired with a dispatch method. 
The dispatch method is used to update the state value by passing an action object to the reducer function. 
In this case, the reducer function is imported from the reducers.js file, and the initial state value is an object with a name property set to '1337user' and an isValid property set to false. 
The Provider component is used to wrap other components in the application so that they can access the context value using the useContext hook. 
It accepts a value prop that is passed to the context provider, and any children components that are wrapped by the Provider component will have access to the context value. */