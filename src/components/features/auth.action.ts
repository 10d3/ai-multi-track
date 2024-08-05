"use server"

import { signOut } from "@/lib/auth/auth";


export const signOutAction = async () =>{
    await signOut();
}