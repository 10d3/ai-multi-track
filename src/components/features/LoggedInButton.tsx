import React from 'react'
// import SignInButton from './SignInButton'
import { Button } from '@/components/ui/button'
import { LoginButton } from './LogInButton'
import { auth } from '@/lib/auth/auth'
import { SignOutButton } from './SignOutButton'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const LoggedInButton = async () => {

    const user = await auth()

    if (!user) {
        return <LoginButton />
    }
    return (
        <SignOutButton>
            <Button variant='outline' size='sm' className='p-2'>
                <Avatar className='size-8'>
                    <AvatarFallback>
                        {user.user?.name?.[0]}
                    </AvatarFallback>
                    {user.user?.image ? (<AvatarImage src={user.user.image} alt={`${user.user.name ?? '-'}'s profile pic`} />) : null}
                </Avatar>
            </Button>
        </SignOutButton>
    )
}