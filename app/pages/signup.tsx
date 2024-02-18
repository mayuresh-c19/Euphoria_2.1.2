import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ProducerUploadPage from './producer';

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(false);
};

const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
};

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPassword('');
};

  const handleSignUpClick = () => {
    if (!name) {
        setNameError(true);
    }
    if (!email) {
        setEmailError(true);
    }
    if (!password) {
        setPasswordError(true);
    }

    // Proceed with sign up if all fields are filled
    if (name && email && password) {
        // Add sign up functionality here
    }
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
                <Input id="name" type="text" placeholder="" value={name} onChange={handleNameChange} required />
                {nameError && <span className="text-red-600">Name is compulsory.</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Email<span style={{ color: 'red' }}>*</span>
                </Label>
                <Input id="email" type="email" placeholder="" value={email} onChange={handleEmailChange} required />
                {emailError && <span className="text-red-600">Email is compulsory.</span>}
              </div>
            <div className="grid gap-2">
                <Label htmlFor="password">
                    Password<span style={{ color: 'red' }}>*</span>
                </Label>
                <Input id="password" type="password" value={password} onChange={handlePasswordChange} required />
                {passwordError && <span className="text-red-600">Password is compulsory.</span>}
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