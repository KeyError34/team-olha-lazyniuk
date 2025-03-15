import { UserModel, IUser } from '../schemas/userSchema.js'; // Correct import from userSchema
import { User } from '../models/user.js'; // Ensure User is the domain model

export class UserRepository {
  async findById(id: string): Promise<User | null> {
    const userDoc = await UserModel.findById(id);
    return userDoc ? this.mapToDomain(userDoc) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ email });
    return userDoc ? this.mapToDomain(userDoc) : null;
  }

  async save(user: User): Promise<void> {
    await UserModel.findByIdAndUpdate(
      user.id,
      {
        userName: user.userName,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
      { upsert: true },
    );
  }

  private mapToDomain(userDoc: IUser): User {
    return new User(
      userDoc.id,
      userDoc.userName,
      userDoc.email,
      userDoc.firstName,
      userDoc.lastName,
      userDoc.password,
      userDoc.phoneNumber,
      userDoc.role,
    );
  }
}
