import React from "react"; //react class component is used Reaxt.Component thingy
import { Redirect } from "react-router-dom"; //to redirect to root or any pg
import firebase from "firebase/app"; //login check
import LinearProgress from "@material-ui/core/LinearProgress"; // loading bar

//class component
class PrivateRoute extends React.Component {
  constructor(props) {
    // we can access anything with the use of cons
    super(props);
    this.state = {
      // state stores data it can be chnged dynamically
      isLoaded: false,
    };
  }

  componentDidMount() {
    //checks the class component is loaded or not , mounts into the view
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          // this treats as bool not needed for user==0 annol
          this.setState({
            isLoaded: true,
            user: user, // taking from func user above assigns to this user
          });
        } else {
          this.setState({
            isLoaded: true,
            user: false,
          });
        }
      }.bind(this)
    );
  }

  render() {
    const { isLoaded, user } = this.state;

    if (!isLoaded) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <LinearProgress className="w-25"></LinearProgress>
        </div>
      );
    } else {
      if (user) {
        const Component = this.props.component;
        return <Component />;
      } else {
        return <Redirect to={{ pathname: "/" }} />;
      }
    }
  }
}

export default PrivateRoute;
