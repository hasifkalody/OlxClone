import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from 'firebase/auth';
import {getFirestore,query, getDocs, collection,where,addDoc} from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL,} from 'firebase/storage';
import { FetchDate } from "../Helpers/Helpers";

const firebaseConfig = {
    apiKey: "AIzaSyCg026Knb05SB9O5AlbspWFDq8128ZwdsM",
    authDomain: "forlearningpurpose.firebaseapp.com",
    projectId: "forlearningpurpose",
    storageBucket: "forlearningpurpose.appspot.com",
    messagingSenderId: "422718836454",
    appId: "1:422718836454:web:f858b9c6d421daafad7527",
    measurementId: "G-TV1FXVF2NG"
  };
  const app =initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage=getStorage(app)

  const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
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
const logInWithEmailAndPassword =(email, password,callback) => {
  signInWithEmailAndPassword(auth,email,password).then((user)=>{
    callback('/')
  }).catch((error)=>{
    const string=error.message
   const indexFirst= string.indexOf("(");
   const indexSecond= string.indexOf(")");
   const errorMessage=error.message.slice(indexFirst+1,indexSecond);
    callback({loginError:errorMessage})
  })
};
const registerWithEmailAndPassword = async (name, email, password,phone,callback) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      phone
    });
    callback('/')
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

// ======================store=================================
const upload = (image, Name, Category, Price,uid) => {

  const storageRef = ref(storage, `sellPostings/${image.name}`);
  uploadBytes(storageRef, image).then((snapshot) => {
    getDownloadURL(ref(storage, `sellPostings/${image.name}`))
    .then((url) => {
      const date=FetchDate(new Date())
      const SellingItemData = { Name, Category, Price, imageURL: url,date,uid }
      addDoc(collection(db, "SellPostings"), SellingItemData);
    })
    .catch((error) => {
      alert("Error While Uploading,Make Sure upladed file is of jpeg format")
    });
  });
}


export {auth,db,storage,signInWithGoogle,logInWithEmailAndPassword,registerWithEmailAndPassword,sendPasswordReset,logout,upload}