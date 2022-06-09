import React, {useContext, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigator';
import { AuthContext } from './AuthContext';
import { auth } from '../../NoT';
import AppStack from './AppStack';


const RootNavigator = () => {
    const {user, setCurrentUser} = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user); 
            if (initializing) setInitializing(false);
        })
        return unsubscribe
    }, [])

    if (initializing) return null;

    return (
        
        <NavigationContainer>
            {user ?  <AppStack /> :  <AuthStack />}
        </NavigationContainer>
    )
}

export default RootNavigator