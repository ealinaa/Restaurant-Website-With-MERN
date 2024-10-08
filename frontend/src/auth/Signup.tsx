import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { signupInputState, userSignupSchema } from "@/schema/userSchema"
import { useUserStore } from "@/store/useUserStore"

import {  Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


// let age = 21; // age always is number
// age = "hello"; 

// typescript ma type define garni 2 ota tarika huncha

// interface LoginInputState {
//   email: String;
//   password: String,
// }
// type SignupInputState= {
//     fullname:string;
//   email: string;
//   password: string,
//   contact:string,
// }

const Signup = () => {
  const [input, setInput] = useState<signupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: ""
  
  });
  const [errors, setErrors] = useState<Partial<signupInputState>>({})
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInput({...input, [name]:value});
  }

    const {signup, loading} = useUserStore();
    const navigate = useNavigate()

  const loginSubmitHandler = async (e:FormEvent) => {
    e.preventDefault();
    //form validation check start
    const result = userSignupSchema.safeParse(input);
    if(!result.success) {
        const fieldErrors= result.error.formErrors.fieldErrors;
        setErrors(fieldErrors as Partial<signupInputState>);
        return;
    }
    // login api implementation start here
        try {
          await signup(input);
          navigate("/verify-email");
        } catch (error) {
          console.log(error);
        }

    console.log(input);
  }
  return (

  
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md border-2 md:border-solid border-gray-200 rounded-lg mx-4">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Adhikari Eats</h1>
          <div className="mb-4 relative">
            <Input
              type="fullname"
              placeholder="Enter Your fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              name="fullname"
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors && <span className="text-xs text-red-500">{errors.fullname}</span>
            }
          </div>
          <div className="mb-4 relative">
            <Input
              type="email"
              placeholder="Enter Your Email"
              value={input.email}
              onChange={changeEventHandler}
              name="email"
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors && <span className="text-xs text-red-500">{errors.email}</span>
            }
          </div>
        </div>

        <div className="mb-4 relative">
          <Input
            type="password"
            placeholder="Enter Your Password"
            value={input.password}
            onChange={changeEventHandler}
            name="password"
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500" />
          {
                errors && <span className="text-xs text-red-500">{errors.password}</span>
            }
        </div>
        <div className="mb-4 relative">
            <Input
              type="contact"
              placeholder="Enter Your contact"
              value={input.contact}
              onChange={changeEventHandler}
              name="contact"
              className="pl-10 focus-visible:ring-1"
            />
            <PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors && <span className="text-xs text-red-500">{errors.contact}</span>
            }
          </div>

        <div className="mb-10">
          {loading ? (
            <Button disabled className="bg-orange-500 w-full hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-orange-500 hover:bg-hoverOrange">
              Signup
            </Button>
          )}
        </div>

        <Separator />

        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { signupInputState, userSignupSchema } from "@/schema/userSchema";
// import { useUserStore } from "@/store/useUserStore";
// import { Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react";
// import { ChangeEvent, FormEvent, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// // typescript me type define krne ka 2 trika hota hai

// const Signup = () => {
//     const [input, setInput] = useState<signupInputState>({
//         fullname:"",
//         email:"",
//         password:"", 
//         contact:"", 
//     });
//     const [errors, setErrors] = useState<Partial<signupInputState>>({});
//     const {signup, loading} = useUserStore();
// const navigate = useNavigate();
//     const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
//         const {name, value} = e.target;
//         setInput({...input, [name]:value});
//     }
//     const loginSubmitHandler = async (e:FormEvent) => {
//         e.preventDefault();
//         // form validation check start
//         const result = userSignupSchema.safeParse(input);
//         if(!result.success){
//             const fieldErrors = result.error.formErrors.fieldErrors;
//             setErrors(fieldErrors as Partial<signupInputState>);
//             return;
//         }
//         // login api implementation start here
//         try {
//           await signup(input);
//           navigate("/verify-email");
//         } catch (error) {
//           console.log(error);
//         }
//     }
  
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
//         <div className="mb-4">
//           <h1 className="font-bold text-2xl">AdhikariEats</h1>
//         </div>
//         <div className="mb-4">
//           <div className="relative">
//             <Input
//               type="text"
//               placeholder="Full Name"
//               name="fullname"
//               value={input.fullname}
//               onChange={changeEventHandler}
//               className="pl-10 focus-visible:ring-1"
//             />
//             <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
//             { errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="relative">
//             <Input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={input.email}
//               onChange={changeEventHandler}
//               className="pl-10 focus-visible:ring-1"
//             />
//             <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
//             { errors && <span className="text-xs text-red-500">{errors.email}</span>}
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="relative">
//             <Input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={input.password}
//               onChange={changeEventHandler}
//               className="pl-10 focus-visible:ring-1"
//             />
//             <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
//             { errors && <span className="text-xs text-red-500">{errors.password}</span>}
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="relative">
//             <Input
//               type="text"
//               placeholder="Contact"
//               name="contact"
//               value={input.contact}
//               onChange={changeEventHandler}
//               className="pl-10 focus-visible:ring-1"
//             />
//             <PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
//             { errors && <span className="text-xs text-red-500">{errors.contact}</span>}
//           </div>
//         </div>
//         <div className="mb-10">
//           {loading ? (
//             <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
//             </Button>
//           ) : (
//             <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">
//               Signup
//             </Button>
//           )}
//         </div>
//         <Separator/>
//         <p className="mt-2">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;