import { initializeApp } from "firebase/app";
    import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInAnonymously,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpy2hjbPy5XTHCaH8D7zw1HMteFSN_VWA",
    authDomain: "fir-auth-react-redux-9fa86.firebaseapp.com",
    projectId: "fir-auth-react-redux-9fa86",
    storageBucket: "fir-auth-react-redux-9fa86.appspot.com",
    messagingSenderId: "447624739341",
    appId: "1:447624739341:web:102dea81750cc42c4bb344",
    measurementId: "G-9T5K426J1P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signInRandom = async () => {
    try {
        const res = await signInAnonymously(auth)
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    const res = signOut(auth);
    console.log(res);
};

export {
    auth,
    db,
    signInRandom,
    signInWithGoogle,
    logout,
}

