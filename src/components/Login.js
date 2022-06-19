import React, { useState } from "react";
import "../css/Login.css";
import { useSelector, useDispatch } from "react-redux";
import { auth, googleProvider } from "../firebase";
import { loginWithGoogle, logoutFromState } from "../redux/userSlice";
// import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch(); //REDUXA VERI GEÇEBILMEK IÇIN GEREKEN NESNE ###############################################

  // const [submittedButton, setSubmittedButton] = useState();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm(); //REACT-HOOK-FORM ILE FORM KULLANMAK IÇIN GEREKEN YAPI ###############################################

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleProvider).then((result) => {
      dispatch(
        loginWithGoogle({
          userName: result.user.displayName,
          email: result.user.email,
        })
      );
    });
  }; //GOOGLE ILE GIRIŞ YAPMAYA VE BUNU STATE'E KAYDETMEYE YARAYAN FONKSIYON ###############################################

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => dispatch(logoutFromState()))
      .catch((err) => alert(err.message));
  }; //HERHANGI BIR GIRIŞTEN LOGOUT YAPMAYA VE BUNU STATE'TEN SILMEYE YARAYAN FONKSIYON ###################################

  return (
    <div className="Login">
      <button className="button" onClick={handleLoginWithGoogle}>
        Sing In With Google
      </button>
      {/*-----------------------------------------------------------------------------------------------------------------------*/}
    </div>
  );
}

export default Login;
