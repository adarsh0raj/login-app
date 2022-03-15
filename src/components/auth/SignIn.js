import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInRandom, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SignIn() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div className="login">
            <div className="login__container">
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <button className="login__btn login__anon" onClick={signInRandom}>
                    Login Anonymously
                </button>
            </div>
        </div>
    );
}
export default SignIn;