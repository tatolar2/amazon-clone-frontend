// the below code includes authontication page, functinality and all final codes

import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import "./Auth.css"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  // console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .then(() => {
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUP: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .then(() => {
          setLoading({ ...loading, signUP: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUP: false });
        });
    }
  };

  // console.log(password, email);

  return (
    <section className="login">
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className="login_container">
        <h1>Sign In</h1>
        {navStateData.state && navStateData.state.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData.state.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className="login_signInButton"
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className="login_registerButton"
        >
          {loading.signUP ? (
            <ClipLoader color="#111" size={15}></ClipLoader>
          ) : (
            "Sign Up"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}
export default Auth;


















// the below code includes autontication page and authontication functinality

// import React, { useState, useContext } from "react";
// import "./Auth.css";
// import { Link } from "react-router-dom";
// import { auth } from "../../Utility/firebase";

// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// import { ClipLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [loading, setLoading] = useState({ signIn: false, signUP: false });
//   const navigate = useNavigate();

//   console.log(user);
//   // console.log(email, setEmail);

//   const authHandler = async (e) => {
//     e.preventDefault();
//     console.log(e.target.name);

//     if (e.target.name == "signin") {
//       // firebase auth
//       setLoading({ ...loading, signIn: true });
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//           setLoading({ ...loading, signIn: false });
//           navigate("/");
//         })
//         .catch((err) => {
//           setError(err.message);
//           setLoading({ ...loading, signIn: false });
//         });
//     } else {
//       setLoading({ ...loading, signUP: true });
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//           setLoading({ ...loading, signUP: false });
//           navigate("/");
//         })
//         .catch((err) => {
//           setError(err.message);
//           setLoading({ ...loading, signUP: false });
//           // console.log(err);
//         });
//     }
//   };

//   return (
//     <section className="login">
//       {/* login */}
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt=""
//         />
//       </Link>
//       {/* form */}
//       <div className="login_container">
//         <h1>Sign In</h1>
//         <form action="">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//             />
//           </div>

//           <button
//             type="submit"
//             onClick={authHandler}
//             name="signin"
//             className="login_signInButton"
//           >
//             {loading.signIn ? (
//               <ClipLoader color="#000" size={15}></ClipLoader>
//             ) : (
//               "Sign In"
//             )}
//           </button>
//         </form>
//         {/* agreement */}
//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>
//         {/* create account btn */}
//         <button
//           type="submit"
//           name="signup"
//           onClick={authHandler}
//           className="login_registerButton"
//         >
//           {loading.signUP ? (
//             <ClipLoader color="#111" size={15}></ClipLoader>
//           ) : (
//             "Sign Up"
//           )}
//         </button>
//         {error && (
//           <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
//         )}
//       </div>
//     </section>
//   );
// }
// export default Auth;

// the below code is only the front authontication page (login ,signup) including css

// import React, { useState } from 'react'
// import "./Auth.css";
// import { Link } from 'react-router-dom';

// function Auth() {

//   return (
//     <section className="login">
//       {/* login */}
//       <Link>
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt=""
//         />
//       </Link>
//       {/* form */}
//       <div className="login_container">
//         <h1>Sign In</h1>
//         <form action="">
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <button className="login_signInButton">Sign In</button>
//         </form>
//         {/* agreement */}
//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>
//         {/* create account btn */}
//         <button className="login_registerButton">
//           Create your Amazon Account
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Auth;
