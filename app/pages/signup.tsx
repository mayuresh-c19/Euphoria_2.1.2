// import { Metadata } from "next"
import Image from "next/image"
import { Drumstick, icons } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Drumsticks from "../assets/drumsticks.jpg"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function SignUpWithImage() {
    const navigate = useNavigate();
  return (
    <>
        
        <div className="container relative lg:h-[800px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 sm:grid-cols-1 lg:px-0 mt-4 flex">
            <div className="relative lg:h-[720px] lg:w-[1024px] md:h-[400px] md:w-[600px] p-10 dark:border-r ml-24 md:block md:items-center md:justify-center hidden"> 
                <div className="ml-24 rounded-l-lg rounded-r-lg h-full w-full mt-10">
                    <Image
                    src={Drumsticks}
                    fill
                    alt="Drumsticks on a drum pad"
                    className="rounded-l-lg rounded-r-lg h-full w-full mt-10"
                    />
                </div>
            </div>

            <div className="lg:p-8 lg:ml-56 md:mt-20 sm:mt-56 flex">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
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
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <span className=" text-blue-600 hover:underline text-sm">
                        Forget password ?
                    </span>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                    <Button className="w-full">Sign Up</Button>
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
                    Already have an account?{" "}
                    <span className=" text-blue-600 hover:underline text-sm cursor-pointer"
                    onClick={() => navigate('/login')}
                    >Sign In</span>
                    </p>
                </Card>
                </div>
            </div>
        </div>

    </>
  )
}