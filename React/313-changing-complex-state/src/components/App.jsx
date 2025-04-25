import React from "react";

function App() {
  // w/o complex state
  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  // return (
  //   <div className="container">
  //     <h1>Hello {firstName} {lastName}</h1>
  //     <form>
  //       <input name="fName" placeholder="First Name" onChange={handleFirstNameChange}/>
  //       <input name="lName" placeholder="Last Name" onChange={handleLastNameChange}/>
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // );

  // with complex state
  const [fullName, setFullName] = React.useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event){
    const {newValue, inputName} = event.target;
    // =
    // const newValue = event.target.value;
    // const inputName = event.target.name;


    setFullName(prevValue => {
      if(inputName === "firstName"){
        return {
          firstName: newValue,
          lastName: prevValue.lastName
        }
      } else if(inputName === "lastName"){
        return {
          firstName: prevValue.firstName,
          lastName: newValue
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
      <form>
        {/* setting value attribute in input to match React state not strictly necessary but good practice */}
        <input name="firstName" placeholder="First Name" onChange={handleChange} value={fullName.firstName}/>
        <input name="lastName" placeholder="Last Name" onChange={handleChange} value={fullName.lastName}/> 
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
