import Header from '@/modules/Layout/components/header'
import React from 'react'
import { currUser } from '@/modules/authentication/actions';

const layout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currUser();
    return (
        <>
            <Header user={user!} />
            <div>{children}</div>
        </>
    )
}

export default layout