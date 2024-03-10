"use server"

import { PrismaClient, users } from '@prisma/client'
import { registerSchema } from 'src/schemas/form';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUserToDB = async (userData: {
    username: string;
    email: string;
    password: string;
  }): Promise<users> => {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      console.log(`Hashed Password: ${hashedPassword}`);

      const user = await prisma.users.create({
        data: {
          username: userData.username,
          email: userData.email,
          password: hashedPassword, // Make sure to hash the password before saving
        },
      });
  
      return user;
    } catch (error) {
      throw new Error('Error creating user: ' + error);
    }
  };