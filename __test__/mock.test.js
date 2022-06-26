import firebase from 'firebase'
import { database } from 'firebase-admin';

const { mockFirebase } = require('firestore-jest-mock');


// Create a fake Firestore with a `users` and `orders` collection
describe('test query', () => {
    const options = {
        includeIdsInData: true,
        mutable: true,
        simulateQueryFilters: true,
      };
      
    mockFirebase(database, options,
        { database: {
            users: [
                { email: 'mk@gmail.com', firstName: 'M', lastName: 'K', mobileNumber: '12345678' },
            ],
        
      },
    });
    
    const { mockCollection, mockWhere } = require('firestore-jest-mock/mocks/firestore');

    test('testing firebase mock', () => {
    const firebase = require('firebase'); // or import firebase from 'firebase';
    const db = firebase.firestore();
    
    return db
    .collection('users')
    .get()
    .then(() => {
      expect(mockCollection).toHaveBeenCalledWith('users');
    });
});
    
    /*
    test('query get firstName', async () => {
    await maybeGetUsersFirstName('M');

    // Assert that we call the correct Firestore methods
    expect(mockCollection).toHaveBeenCalledWith('users');
    expect(mockWhere).toHaveBeenCalledWith('firstName', '==', 'M');
  });
    */
    })
/*
    function maybeGetUsersFirstName(name) {
        const firebase = require('firebase'); // or import firebase from 'firebase';
        const db = firebase.firestore();
        const query = db.collection('users');
      
        if (name) {
          query = query.where('firstName', '==', name);
        }
      
        return query.get();
      }    


*/




/*
orders: [{
    deliveryFee: 2, 
    image: 'https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png',
    mobileNo: '123456',
    price: 3,
    productName: '1 Piece Nuggets',
    quantity: 2,
    remarks: 'toa payoh',
    restaurant: 'Deck',
    status: 'Not Accepted',
    uid: 'lPoSoWKPQmMfArIS9yPBV0eY54u1'
}],



*/