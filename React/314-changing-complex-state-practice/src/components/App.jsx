import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleInputChange(event){
    const { name, value } = event.target;
    setContact((prevContact) => {
      if (name === "fName") {
        return {
          ...prevContact,
          // =
          // lName: prevContact.lName,
          // email: prevContact.email,
          fName: value
        };
      }
      else if (name === "lName") {
        return {
          ...prevContact,
          lName: value
        };
      }
      else if (name === "email") {
        return {
          ...prevContact,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleInputChange} value={contact.fName}/>
        <input name="lName" placeholder="Last Name" onChange={handleInputChange} value={contact.lName}/>
        <input name="email" placeholder="Email" onChange={handleInputChange} value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
