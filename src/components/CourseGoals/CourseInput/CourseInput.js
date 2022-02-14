import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // If input text has been entered...
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // trim removes excess white space at beginning or end
    // this ensures we can't enter empty goals in the checklist
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      {/* Used before stying added to component in FormControl
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div> 
      
      Can also do it this way:
      <FormControl className={!isValid && 'invalid'}/>*/}
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// import styled from 'styled-components';

// Styled-components package format
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${(props) => (props.invalid ? 'red' : 'black')}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
//   }
// }
// `;

// Special styles, deleted after adding conditionals to & input border/background
// &.invalid input {
//   border-color: red;
//   background: #ffd7d7;
//   }

// &.invalid label {
//   color: red;

// ...
{
  /* <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </FormControl> */
}
