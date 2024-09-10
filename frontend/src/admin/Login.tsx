import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"




const Login = () => {
  return (

    <div className="flex items-center justify-center min-h-screen">
      <form className="md:p-8 w-full max-w-md border-2 md:border-solid border-gray-200 rounded-lg mx-4" >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Adhikari Eats</h1>
        </div>
        <div className="relative">


          <Input
            type="email"
            placeholder="Enter Your email" className="pl-8"/>
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
        </div>

        <div>
          {/* <Label>Password</Label> */}
          <Input
            type="password"
            placeholder="Enter Your Password" />


        </div>

      </form>

    </div>
  )
}

export default Login