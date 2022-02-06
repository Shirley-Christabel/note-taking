import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./Firebase"; // import firebase.jsx
import firebase from "firebase/app";
import "firebase/auth";
import CitySvg from "./components/CitySvg";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

const easing = [0.6, -0.05, 0.01, 0.99];
const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

export default function Login() {
  const history = useHistory();
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user);
      history.push("/home");
    }
  });
  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;
      })
      .catch((error) => {});
  }
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <AnimatedCursor
        innerSize={8}
        outerSize={6}
        color="254, 0, 119"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <motion.div variants={fade}>
        <div
          className="container d-flex align-items-center justify-content-center flex-column"
          style={{ height: "350px", width: "auto", marginTop: "100px" }}
        >
          {" "}
          <CitySvg></CitySvg>
        </div>
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <h2 className="mb-4">Notcha Bookse</h2>

          <Button
            variant="contained"
            color="secondary"
            style={{ textTransform: "capitalize" }}
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>{" "}
      </motion.div>
    </motion.div>
  );
}
