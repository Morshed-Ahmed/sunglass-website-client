/* import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";

initializeFirebaseApp()
const useFirebase = () => {
  const [user, setUser] = useState({})
  const auth = getAuth();



  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }


  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        setUser(user)

      } else {
        setUser({})
      }
    });
    return () => unsubscribe
  }, [])

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return {
    user,
    loginUser,
    registerUser,
    logout,

  }
}

export default useFirebase; */




import initializeFirebaseApp from "../Pages/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


// initialize firebase app
initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name }
        setUser(newUser)

        saveUser(email, name, 'POST')


        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {

        });

        history.replace('/')
      })
      .catch((error) => {
        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {

        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        setAuthError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);

      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
  }

  /*  const signInWithGoogle = (location, history) => {
     setIsLoading(true);
     signInWithPopup(auth, googleProvider)
       .then((result) => {
         const user = result.user;
         saveUser(user.email, user.displayName, 'PUT');
         setAuthError('');
         const destination = location?.state?.from || '/';
         history.replace(destination);
       }).catch((error) => {
         setAuthError(error.message);
       }).finally(() => setIsLoading(false));
   } */
  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  const logout = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  return {
    user,
    admin,
    isLoading,
    authError,
    signInWithGoogle,
    registerUser,
    loginUser,
    logout,
  }
}

export default useFirebase;