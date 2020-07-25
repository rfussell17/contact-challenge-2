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
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        notes: "",
      },
    };
    this.updateInputs = this.updateInputs.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateInputs = (property, value) => {
    const formCopy = Object.assign({}, this.state.form);

    formCopy[property] = value;

    this.setState({
      form: formCopy, property
    });
  };

  handleSubmit(){
    let contactsCopy = [];
    for(let i = 0; i < this.state.contacts.length; i++){
      const copy = Object.assign({}, this.state.contacts[i]);
      contactsCopy.push(copy);
  }

    let newData = {
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName,
      phone: this.state.form.phone,
      email: this.state.form.email,
      addressLine1: this.state.form.addressLine1,
      addressLine2: this.state.form.addressLine2,
      city: this.state.form.city,
      state: this.state.form.state,
      country: this.state.form.country,
      notes: this.state.form.notes
    }


    contactsCopy.push(newData)

    this.setState({
      contacts: contactsCopy,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      notes: ""
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
          handleSubmit={this.handleSubmit}
          updateInputs={this.updateInputs}
          form={this.state.form} />
        </div>
        <div>
          <ContactsTable contacts={this.state.contacts}
            />
        </div>
      </div>
    );
  }
}

export default App;
