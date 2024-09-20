import { client, sender } from "./mailtrap"

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const recipient = [{  email }];
    try{
        const res = await client.send({
            from:sender,
            to: recipient,
            subject: 'verify your email',
            // html: htmlContent.replace("{verificationToken}, verificationToken"),
            category:'Email Verification'
        })


    } catch(error) {
        console.log(error)
        throw new Error("Failed to send email verification")


    }
} 

export const  sendWelcomeEmail = async(email:string,name: string) => {
    const recipient = [ {email}];
    const htmlContent = ""
    try{
        const res = await client.send({
            from: sender,
            to: recipient,
            subject:" Welcome to Adhikari eats",
            html: htmlContent,
            category:"Email Verification",
            template_variables: {
                comapny_info_name:"AdhikariEats",
                name: name
            }
        })

    } catch(error) {
        console.log(error)
        throw new Error("Failed to send Welcome email")

    }
 
}

export const sendPasswordResetEmail = async(email: string,resetURL:string ) => {
    const recipient = [{email}]
    const htmlContent= ""
    try{
        const res = await client.send({
            from: sender,
            to: recipient,
            subject:'Reset your Password',
            html:htmlContent,
            category:"Reset Password"
    })
    } catch(error) {
        console.log(error)
        throw new Error("Failed to reset your password")
    }

}


export const sendResetSuccessEmail= async(email:string, resetURL: string) => {
    const recipient = [ {email} ] 
    const HtmlContent = ""
    try{
        const res = await client.send ({
            from:sender,
            to:recipient,
            subject:"Password Reset Successfully",
            html: HtmlContent,
            category: "Password Reset"
            

        })

    } catch(error) {
        console.log(error)
        throw new Error("Failed to send reset success email")
    }
}