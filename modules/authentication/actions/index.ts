'use server'

import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import db from '@/lib/prisma'

export const currUser = async () => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session?.user?.id) {
            return null;
        }

        const user = await db.user.findUnique({
            where: {
                id: session.user.id
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return user;
    } catch (error) {
        console.log("error in fetching user data:", error);
        return null;
    }
} 