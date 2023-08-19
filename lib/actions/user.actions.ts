'use server';

import User from '../models/user.models';
import Community from '../models/community.model';

import { connectToDB } from '../mongoose';

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId }).populate({
      path: 'communities',
      model: Community,
    });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
