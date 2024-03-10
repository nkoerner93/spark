import { PrismaClient, Session, Users } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

const prisma = new PrismaClient();

export const createSession = async (userId: number): Promise<Session> => {
    try {
        // Generate a unique session ID using UUID
        const sessionId = uuidv4();

        // Create a new session record in the database
        const session = await prisma.session.create({
            data: {
                sessionId: sessionId,
                userId: userId,
                createdAt: new Date() // Set session creation timestamp
            }
        });

        return session;
    } catch (error) {
        // Handle any errors
        throw new Error('Error creating session: ' + error);
    }
};