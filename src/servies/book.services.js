import firebase from "../firebase-config";
import 'firebase/compat/firestore';
const firestore = firebase.firestore();
import firestore from "firebase/firestore";

// const bookCollectionRef = collection(db, "books");

class BookDataService {
    
    addBooks = async (newBook) => {
        return firestore.collection('books').add(newBook);
    }
    updateBook = async (id, updateBook) => {
        return firestore.collection('books').doc(id).update(  updateBook);
    }
    deleteBook =async  (id) => {
        return firestore.collection('books').doc(id).delete();
    }
    getAllBooks = async(id) => {
        return firestore.collection('books').get();
    }
    getBook = async (id) => {
        return firestore.collection('books').doc(id).get();
    }
    // editbook = async (id)=>{
    //     return firebase.collection('books').doc(id).edit()
    

}

export default new BookDataService()