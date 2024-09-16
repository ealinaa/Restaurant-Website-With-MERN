import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { LoginInputState, userLoginSchema } from "@/schema/userSchema"

import { Loader2, LockKeyhole, Mail } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom"


// let age = 21; // age always is number
// age = "hello"; 

// typescript ma type define garni 2 ota tarika huncha

// interface LoginInputState {
//   email: String;
//   password: String,
// }
// type LoginInputState= {
//   email: string;
//   password: string,
// }

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({})
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInput({...input, [name]:value});
  }
  const loginSubmitHandler = (e:FormEvent) => {
    e.preventDefault();
//form data
const result = userLoginSchema.safeParse(input);
if(!result.success){
  const fieldErrors = result.error.formErrors.fieldErrors;
  setErrors(fieldErrors as Partial<LoginInputState>);
  return;
}

    console.log(input);
  }
  const loading = false;
  return (

    // <div className="flex items-center justify-center min-h-screen">
    //   <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md border-2 md:border-solid border-gray-200 rounded-lg mx-4" >
    //     <div className="mb-4">
    //       <h1 className="font-bold text-2xl ">Adhikari Eats</h1>
    //       <div className="mb-4">
    //         <div className="relative ">

    //           <Input
    //             type="email"
    //             placeholder="Enter Your email"
    //              value={input.email} onChange={changeEventHandler}
    //              className="pl-10 focus-visible:ring-1  "/>
    //           <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
    //         </div>

    //       </div>
    //     </div>

    //     <div className="mb-4">
    //       <div className=" relative">
    //         {/* <Label>Password</Label> */}
    //         <Input
    //         type="password"
    //         placeholder="Enter Your Password"
    //         value={input.password}
    //         onChange={changeEventHandler}
    //         name="password"
    //         className="pl-10 focus-visible:ring-1"
    //       />

    //         <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer" />

    //       </div>
    //     </div>
    //     <div className="mb-10">
    //       {loading ? (
    //         <Button disabled className="bg-orange-500 w-full hover:bg-hoverOrange">
    //           <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait
    //         </Button>

    //       ) : (
    //         <Button type="submit" className="w-full bg-orange-500 hover:bg-hoverOrange">Login</Button>

    //       )}
    //     </div>
    //     <Separator />
    //     <p className="mt-2">
    //       Don't have an account? { " "}
    //       <Link to="/signup" className="text-blue-500">Signup</Link>
    //     </p>


    //   </form>

    // </div>
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md border-2 md:border-solid border-gray-200 rounded-lg mx-4">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Adhikari Eats</h1>
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

        <div className="mb-10">
          {loading ? (
            <Button disabled className="bg-orange-500 w-full hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-orange-500 hover:bg-hoverOrange">
              Login
            </Button>
          )}
          <div className="mt-4">
          <Link to="/forgetpassword" className="hover:text-blue-500 hover:underline">Forget Password</Link>
        </div>
          </div>

        <Separator />

        <p className="mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Separator } from "@/components/ui/separator"
// import { Loader2, LockKeyhole, Mail } from "lucide-react"
// import { ChangeEvent, FormEvent, useState } from "react"
// import { Link } from "react-router-dom"

// interface LoginInputState {
//   email: string;
//   password: string;
// }

// const Login = () => {
//   const [input, setInput] = useState<LoginInputState>({
//     email: "",
//     password: "",
//   });

//   const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };

//   const loginSubmitHandler = (e: FormEvent) => {
//     e.preventDefault();
//     console.log(input);
//   };

//   const loading = false;

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md border-2 md:border-solid border-gray-200 rounded-lg mx-4">
//         <div className="mb-4">
//           <h1 className="font-bold text-2xl">Adhikari Eats</h1>
//           <div className="mb-4 relative">
//             <Input
//               type="email"
//               placeholder="Enter Your Email"
//               value={input.email}
//               onChange={changeEventHandler}
//               name="email"
//               className="pl-10 focus-visible:ring-1"
//             />
//             <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
//           </div>
//         </div>

//         <div className="mb-4 relative">
//           <Input
//             type="password"
//             placeholder="Enter Your Password"
//             value={input.password}
//             onChange={changeEventHandler}
//             name="password"
//             className="pl-10 focus-visible:ring-1"
//           />
//           <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500" />
//         </div>

//         <div className="mb-10">
//           {loading ? (
//             <Button disabled className="bg-orange-500 w-full hover:bg-hoverOrange">
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Please Wait
//             </Button>
//           ) : (
//             <Button type="submit" className="w-full bg-orange-500 hover:bg-hoverOrange">
//               Login
//             </Button>
//           )}
//         </div>

//         <Separator />

//         <p className="mt-2">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-500">
//             Signup
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
