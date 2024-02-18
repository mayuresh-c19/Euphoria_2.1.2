import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getFirestore, doc, setDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";
import 'firebase/auth'; // If you're using Firebase Auth
import 'firebase/firestore'; // If you're using Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCvrK9yYsKdW0zuXVBs6iJY-Qo9oNHGbl0",
    authDomain: "beatmarket-7c9be.firebaseapp.com",
    projectId: "beatmarket-7c9be",
    storageBucket: "beatmarket-7c9be.appspot.com",
    messagingSenderId: "628739580119",
    appId: "1:628739580119:web:47a02e6fb7a0a072e89092",
    measurementId: "G-WF2SR7KRM6"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export default function SignUp() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        password: "",
        role: ""
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
  
      const handleSignUpClick = async (e: { preventDefault: () => void; }) => {
        const { Name, email, password, role } = formData;

        if (!Name || !email || !password || !role) {
            alert('Please fill out all fields');
            return;
        }

        e.preventDefault();
        console.log(formData);
          
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then(async (userCreds) => {
            
            // Save form data to Firestore
            const db = getFirestore(app);
            await setDoc(doc(db, "users/" + userCreds.user.uid), {
                fullName: formData.Name,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            });
            const user = userCreds.user;
            console.log(user);
            if (user) {
                console.log('User created successfully');
                alert('User created successfully');
                navigate("/login");
            }
          })
            
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (errorCode === 'auth/email-already-in-use') {
                alert('The email address is already in use by another account.');
              } else {
                alert(errorMessage);
              }
          })
          navigate("/login");
        };

        const handleForgotPasswordClick = () => {
            navigate('/forgotpass'); // Navigate to the Forgot Password page
        };

  return (
    <div className="container relative h-[800px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0 mt-4 flex">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center lg:grid-cols-1 space-y-6 lg:max-w-lg">
          <Card className="mt-4">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                Create an account
              </CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to sign up
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">
                  Name<span style={{ color: 'red' }}>*</span>
                </Label>
                <Input 
                id="name" 
                name="Name" 
                type="text" 
                placeholder="" 
                onChange={handleChange}
                required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Email<span style={{ color: 'red' }}>*</span>
                </Label>
                <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="" 
                onChange={handleChange} 
                required />
              </div>
            <div className="grid gap-2">
                <Label htmlFor="password">
                    Password<span style={{ color: 'red' }}>*</span>
                </Label>
                <Input 
                id="password" 
                name="password"
                type="password" 
                onChange={handleChange} 
                required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="role">
                    Role<span style={{ color: 'red' }}>*</span>
                </Label>
                <select 
                    id="role" 
                    name="role"
                    onChange={handleChange} 
                    required>
                    <option value="artist">Artist</option>
                    <option value="producer">Producer</option>
                </select>
            </div>
              <span className="text-blue-600 hover:underline text-sm cursor-pointer" onClick={handleForgotPasswordClick}>
                Forget password ?
              </span>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" onClick={handleSignUpClick}>Sign Up</Button>
            </CardFooter>
            <div className="relative mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 m-2">
              <Button variant="outline">
                Github
              </Button>
              <Button variant="outline">
                Google
              </Button>
            </div>
            <p className="mt-2 text-xs text-center text-gray-700 mb-2">
              {" "}
              Already have an account?{" "}
              <span
                className="text-blue-600 hover:underline text-sm cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Log In
              </span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}