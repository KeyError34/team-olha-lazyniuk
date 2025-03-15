import { UserRepository } from '../repositories/userRepository.js';
import { User } from '../models/user.js';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async updateUserEmail(id: string, newEmail: string): Promise<void> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('User not found');

    user.changeEmail(newEmail);
    await this.userRepository.save(user);
  }
}
