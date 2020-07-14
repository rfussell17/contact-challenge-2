import React, { Component } from "react";
import "./App.css";
import NewContactForm from "./NewContactForm";
import ContactsTable from "./ContactsTable";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          firstName: "Andy",
          lastName: "Sterkowitz",
          phone: "5551234567",
          email: "andy@email.com",
          addressLine1: "123 Main St.",
          addressLine2: "Apt 1",
          city: "Chicago",
          state: "Illinois",
          country: "USA",
          notes: "None!",
        },
      ],
      form: {
        firstName: "Robin F",
        lastName: "Fussell",
        phone: "555-555-5555",
        email: "robinf@email.com",
        addressLine1: "123 Main st",
        addressLine2: "Apt 1",
        city: "Gotham City",
        state: "ZZ",
        country: "CA",
        notes: "This is a note",
      },
    };
    this.state.updateInputs = this.updateInputs.bind(this)
    this.state.handleSubmit = this.handleSubmit.bind(this)
  }

  updateInputs = (property, value) => {
    const formCopy = Object.assign({}, this.state.form);

    formCopy[property] = value;

    this.setState({
      form: formCopy, property
    });
  };


  handleSubmit(){
    const contactsCopy =  Object.assign({}, this.state.contacts);

    contactsCopy[this.state.contacts]
    //contactsCopy.push(this.state.contacts)

    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    // do not remove this!
    console.log("current value of name <input>: ", this.state.form.firstName);
    return (
      <div className="container">
        <h1 className="my-4">Contact Tracker!</h1>
        <div>
          <NewContactForm 
          updateInputs={this.updateInputs}
          form={this.state.form} />
        </div>
        <div>
          <ContactsTable contacts={this.state.contacts}  />
        </div>
      </div>
    );
  }
}

export default App;
