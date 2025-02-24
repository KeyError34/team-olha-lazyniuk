import User from '../models/user.js';
// import db from '../../infrastructure/database/connection.js';

class UserRepository {
  // async findById(id: string): Promise<User> {
  //   const userData: Array<{ id: string; name: string; email: string; password: string }> =
  //     await db.find({ selector: { id: id } });
  //   if (userData && userData.length > 0) {
  //     const { id, name, email, password } = userData[0];
  //     return new User(id, name, email, password);
  //   }
  //   throw new Error('User not found');
  // }
  // async create(userData: {
  //   name: string;
  //   email: string;
  //   password: string;
  // }): Promise<{ id: string; name: string; email: string; password: string }> {
  //   const user: User = new User(null, userData.name, userData.email, userData.password);
  //   const result: { id: string } = await db.insert(user);
  //   return { ...user, id: result.id };
  // }
  // async update(
  //   id: string,
  //   userData: { name?: string; email?: string; password?: string },
  // ): Promise<User> {
  //   const user: User = await this.findById(id);
  //   if (user) {
  //     user.name = userData.name || user.name;
  //     user.email = userData.email || user.email;
  //     user.password = userData.password || user.password;
  //     await db.update(user);
  //     return user;
  //   }
  //   throw new Error('User not found');
  // }
  // async delete(id: string): Promise<{ message: string }> {
  //   const result: { deleted: number } = await db.remove({ id });
  //   if (result.deleted > 0) {
  //     return { message: 'User deleted successfully' };
  //   }
  //   throw new Error('User not found');
  // }
}

export default UserRepository;
