import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount = () => {
    // load auth2 library
    window.gapi.load("client:auth2", () => {
      // initialize client
      window.gapi.client
        .init({
          clientId:
            "290991468037-irh1h44vkv0hoj83qjul4ans7qmffquu.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // get instance to the auth object and update signedIn state
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());

          // listen for any auth status changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  };

  onAuthChange = (isSignedIn) => {
    // change logged in state in redux store
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn == null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            onClick={this.onSignOutClick}
            className="ui red google button"
          >
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={this.onSignInClick}
            className="ui green google button"
          >
            <i className="google icon" />
            Sign In
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
