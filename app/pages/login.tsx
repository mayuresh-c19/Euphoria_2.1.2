import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginWithImage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgotpass'); // Navigate to the Forgot Password page
  };

  const handleLoginClick = () => {
    let hasError = false;
    if (!username) {
      setUsernameError('Username is compulsory');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Password is compulsory');
      hasError = true;
    }
    if (hasError) {
      return;
    }
    // Add login functionality here
    // Once the login is successful, navigate to the ProducerUploadPage
    navigate('/producer');
  };

  return (
    <>
      <div className="container relative h-[800px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0 mt-4 flex">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card className="mt-4">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Log In</CardTitle>
                <CardDescription className="text-center">Enter your username and password to log in</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username<span style={{ color: 'red' }}>*</span></Label>
                  <Input id="username" type="text" placeholder="" value={username} onChange={handleUsernameChange} />
                  {usernameError && <span style={{ color: 'red', fontSize: '0.75rem' }}>{usernameError}</span>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password<span style={{ color: 'red' }}>*</span></Label>
                  <Input id="password" type="password" value={password} onChange={handlePasswordChange} />
                  {passwordError && <span style={{ color: 'red', fontSize: '0.75rem' }}>{passwordError}</span>}
                </div>
                <span className=" text-blue-600 hover:underline text-sm cursor-pointer" onClick={handleForgotPasswordClick}>Forgot your password?</span>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={handleLoginClick}>Log In</Button>
              </CardFooter>
              <div className="relative mb-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 m-2">
                <Button variant="outline">
                  {/* <icons.Github className="mr-2 h-4 w-4" /> */}
                  Github
                </Button>
                <Button variant="outline">
                  {/* <icons.Twitter className="mr-2 h-4 w-4" /> */}
                  <img className=" w-4 h-4 mr-3"src="../assets/search.png" alt="" />
                  Google
                </Button>
                
              </div>
              <p className="mt-2 text-xs text-center text-gray-700 mb-2">
                {" "}
                Don't have an account?{" "}
                <span className=" text-blue-600 hover:underline text-sm cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}