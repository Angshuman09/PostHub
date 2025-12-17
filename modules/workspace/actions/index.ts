"use server"

import { MEMBER_ROLE } from '@/app/generated/prisma/enums';
import db from '@/lib/prisma'
import { currUser } from '@/modules/authentication/actions'

export const initializeWorkspace = async () => {
    const user = await currUser();

    if (!user) {
        return {
            success: true,
            error: "User not found"
        }
    }

    try {
        const workspace = await db.workspace.upsert({
            where: {
                name_ownerId: {
                    ownerId: user.id,
                    name: "Personal workspace"
                },
            },
            update: {},
            create: {
                name: "Personal workspace",
                description: "Your personal workspace",
                ownerId: user.id,
                members: {
                    create: {
                        userId: user.id,
                        role: MEMBER_ROLE.ADMIN
                    }
                }
            },
            include: {
                members: true
            }
        })

        return {
            success: true,
            workspace
        }
    } catch (error) {
        console.log("Error initializing workspace:", error);
        return {
            success: false,
            error: "Failed to initialize workspace"
        }
    }
}
