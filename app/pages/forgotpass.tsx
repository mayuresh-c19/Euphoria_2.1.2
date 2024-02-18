import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetOTPClick = () => {
    // Add functionality to get OTP here
  };

  return (
    <>
      <div className="container relative h-screen flex items-center justify-center">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card className="mt-4">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Forgot Your Password?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={handleGetOTPClick}>Get OTP</Button>
              </CardFooter>
              <p className="mt-2 text-xs text-center text-gray-700 mb-2">
                Remembered your password?{' '}
                <span className="text-blue-600 hover:underline text-sm cursor-pointer" onClick={() => navigate('/login')}>Log In</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
