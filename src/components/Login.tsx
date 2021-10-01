import * as React from 'react';
import IUser from "./../models/IUser"
import "./Login.css";

interface LoginProperties {
  user: IUser;
}

export default class Login extends React.Component<LoginProperties, any> {

  render() {
    return (
      <div id="login" className='collapse navbar-collapse justify-content-end' >
        {this.props.user.IsAuthenticated ? <div>Bienvenido, {this.props.user.DisplayName}</div> : null}
        <ul>
          {this.props.user.IsAuthenticated ?
            <li><a href="#" onClick={this.props.user.logout} >Desconectar</a></li> :
            <li><a href="#" onClick={this.props.user.login} >Conectar</a></li>
          }
        </ul>
      </div>
    );
  }

}

