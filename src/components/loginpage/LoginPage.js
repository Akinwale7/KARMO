import React from "react";
import { KarmoLogo } from "../commons/Logo";
import Input from "../commons/input/Input";
import "./loginpage.less";
class LoginPage extends React.Component {
  render() {
    return (
      <div className="login_page">
        <div>
          <KarmoLogo />
        </div>
        <Input classname="form_input" placeholder="email" />
        <br />
        <Input classname="form_input" placeholder="password" />
        <br />
        <button class="button button1">Login</button>
      </div>
    );
  }
}
export default LoginPage;
