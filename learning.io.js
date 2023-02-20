//~!Lifecycle Methods in Practice

//~#the component mounts ->Trigger life cycle componentDidMount()->Updates the state->A re-render is triggered

//~^componentWillUnmount() -> called just before React removes the component from the DOM 

    //~*Cancel any XMLHttpRequests that might still be running
    //~*To remove event listeners
    //~*To cancel a running interval, which is just what we need in this case.



//~!The Combination of state and props

    // ~#The separation of business and layout components is often referred to by two different terms:

    // ~#Smart components (business logic) -> should not be tied to the layout of the user interface at all

    // ~#Dumb components (layout) :
        // ~* should be free of any logic or side effects
        // ~* should only focus on the plain display of static values.


// ~!The Role of Lifecycle Methods in Combination with Components



// ~!Differences Between the React Event Handlers and the Native Event

    // ~#Events in React are defined with camelCase instead of lowercase

        // ~%onclick is changed to onClick
        // ~%onmouseover is now defined by onMouseOver
        // ~%ontouchstart would be written as onTouchStart
    
    // ~#Event attribute#
        // ~^React uses a function reference instead of a plain string
        // ~^hat mandates the use of curly brackets to inform JSX that a JavaScript expression is used.
            <button onClick={validateInput}>Validate</button>


// ~!The SyntheticEvent Object
    // ~^The SyntheticEvent object is short-lived and nullified shortly after 
    // ~^the event callback has been called (mainly for performance reasons). 
    // ~^Accessing properties of the event object is not possible anymore once outside the original event handler.

    // ~#Writing values into variables

    handleChange = (e) => {
        const { value } = e.target;
        this.setState(() => ({ value }));
    };
    // ~#Persisting SyntheticEvents with e.persist()

    handleChange = (e) => {
        e.persist();
        this.setState(() => ({
          value: e.target.value,
        }));
     };