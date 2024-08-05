import { EmailTemplate } from "@/components/emailTemplates/Congrats";
import { prisma } from "../prima";
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (order:any) =>{
    const user = await prisma.user.findUnique({
        where:{
            id:order.buyerId,
        }
    })
    try {
        const {data, error} = await resend.emails.send({
            from:'AlloBillet <info@allobillet.app>',
            to:`${user?.email}`,
            subject:'hello first test',
            react: EmailTemplate({firstName:`${user?.name}`}),
            text:'Congratulations',
        })
        if(error){
            return error
        }
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}