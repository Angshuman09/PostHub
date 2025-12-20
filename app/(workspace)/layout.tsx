import Header from '@/modules/Layout/components/header'
import React from 'react'
import { currUser } from '@/modules/authentication/actions';
import { initializeWorkspace } from '@/modules/workspace/actions';

const layout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currUser();
    const workspace = await initializeWorkspace();
    console.log(workspace)
    return (
        <>
            <Header user={user!} />
            <div>{children}</div>
        </>
    )
}

export default layout