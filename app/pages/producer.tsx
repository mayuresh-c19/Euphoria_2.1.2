import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getFirestore, collection, addDoc , doc, getDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FirebaseApp, initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvrK9yYsKdW0zuXVBs6iJY-Qo9oNHGbl0",
  authDomain: "beatmarket-7c9be.firebaseapp.com",
  projectId: "beatmarket-7c9be",
  storageBucket: "beatmarket-7c9be.appspot.com",
  messagingSenderId: "628739580119",
  appId: "1:628739580119:web:47a02e6fb7a0a072e89092",
  measurementId: "G-WF2SR7KRM6"
};

const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
// Initialize Firebase Storage
const storage = getStorage(app);

export default function ProducerUploadPage() {
  const navigate = useNavigate();
  const [beatName, setBeatName] = useState('');
  const [selectedGenres, setSelectedGenres] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleGenreSelection = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedGenres(e.target.value);
  };

  const handlePrivacyToggle = () => {
    setIsPrivate(!isPrivate);
  };

  const handlePriceChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPrice(e.target.value);
  };

  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFile(event.target.files ? event.target.files[0] : null);
  };

  
  const handleUpload = async () => {
    if (beatName && selectedGenres && file) {
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, file.name);
      
      // Upload the file to Firebase Storage
      const snapshot = await uploadBytesResumable(storageRef, file);
      
      // Get the URL of the uploaded file
      const url = await getDownloadURL(storageRef);
      
      // Create a new document in the 'beats' collection in Firestore
      const beatDoc = {
        name: beatName,
        genres: selectedGenres,
        isPrivate: isPrivate,
        price: isPrivate ? price : null, // store the price only if the beat is private
        fileUrl: url, // the URL of the uploaded file
      };
      
      await addDoc(collection(db, 'beats'), beatDoc);
      
      // Navigate to another page or show a success message
      alert('Beat uploaded successfully!');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <div className="container relative h-screen flex items-center justify-center">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
          <div className="mt-4">
            <h1 className="text-4xl text-center mb-6">Upload Beats</h1>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label className="text-lg">What is the name of your beat?<span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="text"
                  value={beatName}
                  onChange={(e) => setBeatName(e.target.value)}
                  placeholder="Enter beat name"
                  className="p-2 text-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-lg">Genres<span style={{ color: 'red' }}>*</span></Label>
                <select
                  className="block w-full p-2 border border-gray-300 rounded-md text-lg"
                  onChange={handleGenreSelection}
                  value={selectedGenres}
                >
                  {/* <option value="">Select Genre</option> */}
                  <option value="Hip-Hop Beats">Hip-Hop Beats</option>
                  <option value="Pop beats">Pop beats</option>
                  <option value="Electronic Beats">Electronic Beats</option>
                  <option value="R&B beats">R&B beats</option>
                  <option value="Rock beats">Rock beats</option>
                  <option value="Reggae beats">Reggae beats</option>
                  <option value="Trap Beats">Trap Beats</option>
                  <option value="Dance beats">Dance beats</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label className="text-lg">Privacy</Label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-blue-600"
                    onChange={handlePrivacyToggle}
                    checked={isPrivate}
                  />
                  <span className="ml-2 text-lg">Private</span>
                </div>
              </div>
              {isPrivate && (
                <div className="grid gap-2">
                  <Label className="text-lg">Price (in IND)<span style={{ color: 'red' }}>*</span></Label>
                  <Input type="number" value={price} onChange={handlePriceChange} className="p-2 text-lg" />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Label className="text-lg">Upload Beat File<span style={{ color: 'red' }}>*</span></Label>
                <input type="file" accept=".mp3,.wav" onChange={handleFileChange} className="p-2 text-lg" />
              </div>
              <Button className="w-full text-lg" onClick={handleUpload}>Upload</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}