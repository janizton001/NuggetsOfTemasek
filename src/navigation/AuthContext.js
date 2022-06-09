import React, {createContext, useState, useEffect} from 'react';
import { auth, db } from '../../NoT';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setCurrentUser] = useState(null);
    const value = {
        user,
        setCurrentUser,
        login: async (email, password) => {
            try {
              await auth.signInWithEmailAndPassword(email, password);
              console.log('Logged in with:', user.email)
            } catch (e) {
              console.log(e);
            }
        },
        logout: async () => {
            try {
              await auth.signOut();
              console.log("Logged out")
            } catch (e) {
              console.log(e);
            }
          },
          register: async (email, password, firstName, lastName, mobileNumber) => {
            try {
              await auth.createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                db.collection('user').doc(auth.currentUser.uid)
                .set({
                    firstName: firstName,
                    lastName: lastName,
                    mobileNumber: mobileNumber,
                    email: email,})
                    //ensure we catch any errors at this stage to advise us if something does go wrong
                    .catch(error => {
                        console.log('Something went wrong with added user to firestore: ', error);
                    })
                  })
                  //we need to catch the whole sign up process if it fails too.
                  .catch(error => {
                      console.log('Something went wrong with sign up: ', error);
                  });
                } catch (e) {
                  console.log(e);
                }
              } 
    }
    
    return (
        <AuthContext.Provider
            value={value}>
            {children}
        </AuthContext.Provider>
    )
}