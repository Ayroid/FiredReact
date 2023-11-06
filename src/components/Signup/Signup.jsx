import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Signup.module.css";

const auth = getAuth(app);

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = () =>
    toast.success("USER CREATED!", {
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
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        notify();
      })
      .catch((error) => {
        console.log(error);
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
        SIGNUP
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

export default Signup;
