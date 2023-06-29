import React from 'react';
// import * as Validator from 'validatorjs';
import ShowError from './ShowError';

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

// const ShowError = ({ errors }) => {
//   return (
//     <ul style={{ color: 'red' }}>
//       {errors.map((error, i) => (
//         <li key={i}>{error}</li>
//       ))}
//     </ul>
//   );
// };

class Validation extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;

    // let data = { username, email, password };

    // let rules = {
    //   username: 'required',
    //   email: 'required|email',
    //   password: 'min:8|required',
    // };

    // let validation = new Validator(data, rules);
    // validation.passes();
    // console.log(validation.errors.get());

    //
    let message = [];

    if (username.length === 0) {
      message = [...message, 'username tidak boleh kosong'];
    }
    if (email.length === 0) {
      message = [...message, 'email tidak boleh kosong'];
    }
    if (password.length === 0) {
      message = [...message, 'password tidak boleh kosong'];
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(String(email).toLocaleLowerCase())) {
      message = [...message, 'email salah'];
    }

    if (password.length < 8) {
      message = [...message, 'password terlalu pendek'];
    }

    //
    if (message.length > 0) {
      this.setState({
        errors: message,
      });
    } else {
      alert(`
      Nama: ${this.state.username}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
      this.setState({
        errors: [],
      });
    }
  };

  render() {
    const style = {
      width: '400px',
      margin: '100px auto 0',
      border: '1px solid black',
      padding: '10px',
    };
    return (
      <div style={style}>
        {this.state.errors && <ShowError errors={this.state.errors} />}

        <form onSubmit={this.handleSubmit}>
          <h4>Login Form</h4>
          <Input type="text" name="username" label="Username" onChange={(value) => this.setState({ username: value })} />
          <Input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
          <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Validation;
