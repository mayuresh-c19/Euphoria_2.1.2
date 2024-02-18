import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { icons } from 'lucide-react'; // Import icons from the desired icon library

export default function LoginWithImage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForgotPasswordClick = () => {
    // Add functionality for the forgot password link here
  };

  const handleLoginClick = () => {
    // Add login functionality here
  };

  return (
    <>
      <div className="container relative h-[800px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 mt-4 flex">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card className="mt-4">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Log In</CardTitle>
                <CardDescription className="text-center">Enter your username and password to log in</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={handlePasswordChange} />
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
                  <icons.Github className="mr-2 h-4 w-4" />
                  Github
                </Button>
                <Button variant="outline">
                  <icons.Twitter className="mr-2 h-4 w-4" />
                  Twitter
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

        <div className="relative h-[720px] w-[30%] p-10 dark:border-r ml-24">
          <div className="ml-24 rounded-l-lg rounded-r-lg h-full w-full mt-10">
            {/* Replace the image tag with the desired image for the login page */}
            <img src="../assets/login.jpg" alt="Login" className="rounded-l-lg rounded-r-lg h-full w-full mt-10" />
          </div>
        </div>
      </div>
    </>
  );
}
