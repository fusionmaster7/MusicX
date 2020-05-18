import React from "react";
import "./Styles/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  endLoading = () => {
    if (this.state.loading) {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    setTimeout(this.endLoading, 2500);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <div className="cssload-thecube">
            <div className="cssload-cube cssload-c1"></div>
            <div className="cssload-cube cssload-c2"></div>
            <div className="cssload-cube cssload-c4"></div>
            <div className="cssload-cube cssload-c3"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="intro">
          <div className="heading" id="first">
            MusicX
          </div>
          <div className="heading" id="second">
            An <span id="span1">Open Source</span> Spotify Client
          </div>
          <div className="info">
            Just Login with Spotify and start listening!
          </div>
          <hr className="sep" />
          <div className="lgn">
            <a href="https://music-backend.glitch.me/login">
              <button className="lgn-btn">Login Now</button>
            </a>
          </div>
          <div className="footer">Developed by gawds</div>
        </div>
      );
    }
  }
}

export default Login;
