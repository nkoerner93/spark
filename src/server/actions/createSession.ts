import { PrismaClient, Session, Users } from '@prisma/client';
import * as crypto from "crypto";


const prisma = new PrismaClient();

export const createSessionInDb = async (userId: number): Promise<Session> => {
    try {
        // Calculate expiration date (1 week from now)
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        // Generate a unique session ID using UUID
        const sessionId = crypto.randomBytes(16).toString('hex');
        // Create a new session record in the database
        const session = await prisma.session.create({
            data: {
                sessionId: sessionId,
                userId: userId,
                createdAt: new Date(),
                expiresAt: expiresAt, // one week from now
            }
        });

        return session;
    } catch (error) {
        // Handle any errors
        throw new Error('Error creating session: ' + error);
    }
};