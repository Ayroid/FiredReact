import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Signin.module.css";

const auth = getAuth(app);

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ToastSuccess = () =>
    toast.success("LOGIN SUCCESS!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const ToastError = () =>
    toast.error("LOGIN FAILED!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const createUser = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        ToastSuccess();
      })
      .catch((error) => {
        console.log(error);
        ToastError();
      });
  };

  return (
    <div className={styles.signup}>
      <div className={styles.inputDiv}>
        <label htmlFor="html" className={styles.label}>
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          className={styles.input}
          placeholder="USERNAME"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="password" className={styles.label}>
          PASSWORD
        </label>
        <input
          id="password"
          type="text"
          className={styles.input}
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button className={styles.button} onClick={createUser}>
        SIGN IN
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Signin;
