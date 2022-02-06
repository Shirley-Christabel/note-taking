import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { Frame } from "framer";

export default function Layout(props) {
  const history = useHistory();
  function Logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={6}
        color="254, 0, 119 "
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <AppBar position="static" color="secondary">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6" className="font-weight-bold">
            Notcha Bookse
          </Typography>
          <Button
            className="font-weight-bold text-capitalize"
            onClick={Logout}
            variant="outlined"
            inherit
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Frame
        animate={{ background: "#85F" }}
        transition={{
          duration: 8,
          yoyo: Infinity,
        }}
        background={"#0CF"}
        style={{ width: "100%", height: "100%" }}
      ></Frame>
      {props.children}
    </>
  );
}
