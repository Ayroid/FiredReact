import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

import "./App.css";

const db = getDatabase(app);
const auth = getAuth(app);

function App() {
  const putData = () => {
    set(ref(db, "users/ayroid"), {
      name: "Ayroid",
      age: 21,
      email: "ayroid@gmail.com",
    });
  };

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "ayroids@gmail.com", "ayroids")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="App">
        <h1>Firebase React App</h1>
        {/* <button onClick={putData}>PutData</button>
        <button onClick={signupUser}>Signup</button> */}
        <Signup />
        <Signin />
      </div>
    </>
  );
}

export default App;
