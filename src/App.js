import React from 'react';
import style from './App.module.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { v4 as idGenerator } from 'uuid';
import PhoneBookForm from './Components/Main/PhoneBook/PhoneBookForm/PhoneBookForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneBookForm: false,
      phoneBook: [],
      firstNameValue: '',
      lastNameValue: '',
      phoneNumberValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickAddNewContactBtn = this.onClickAddNewContactBtn.bind(this);
    this.addContactButton = this.addContactButton.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
    this.deleteContactButton = this.deleteContactButton.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClickAddNewContactBtn = () => {
    this.setState({
      phoneBookForm: !this.state.phoneBookForm,
      firstNameValue: '',
      lastNameValue: '',
      phoneNumberValue: '',
    });
  }

  addContactButton = (e) => {
    e.preventDefault();
    let areAllFieldsFilled = Boolean(this.state.firstNameValue && this.state.lastNameValue && this.state.phoneNumberValue);
    if (areAllFieldsFilled) {
      const newContact = {
        name: this.state.firstNameValue,
        lastName: this.state.lastNameValue,
        phoneNumber: this.state.phoneNumberValue,
        id: idGenerator(),
      };
      this.setState({
        phoneBookForm: false,
        phoneBook: [...this.state.phoneBook, newContact],
        firstNameValue: '',
        lastNameValue: '',
        phoneNumberValue: '',
      });
    } else {
      alert('All fields must be filled');
    }
    console.log(this.state);
  }

  cancelButton = (e) => {
    e.preventDefault();
    this.setState({
      phoneBookForm: false,
      firstNameValue: '',
      lastNameValue: '',
      phoneNumberValue: '',
    });
  }

  deleteContactButton = (e) => {
    let phoneBook = [...this.state.phoneBook];
    this.setState({ phoneBook: phoneBook.filter(item => item.id !== e) });
  }

  render() {
    return (
        <div>
          <Header />
          <div className={style.wrapper}>
            <Main
                addNewContact={this.onClickAddNewContactBtn}
                state={this.state}
                handleChange={this.handleChange}
                addContactButton={this.addContactButton}
                cancelButton={this.cancelButton}
                deleteContactButton={this.deleteContactButton}
            />
          </div>
          <PhoneBookForm
              state={this.state}
              handleChange={this.handleChange}
              addContactButton={this.addContactButton}
              cancelButton={this.cancelButton}
          />
        </div>
    );
  }

}

export default App;