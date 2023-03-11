import React from 'react';
import style from './Main.module.css';
import PhoneBook from './PhoneBook/PhoneBook';

class Main extends React.Component {



    render() {
        return (
            <main className={style.main}>
                <h1 className={style.main__title}>Phone Book</h1>
                <PhoneBook
                    state={this.props.state}
                    addNewContact={this.props.addNewContact}
                    deleteContactButton={this.props.deleteContactButton}
                />
            </main>
        );
    }
}

export default Main;