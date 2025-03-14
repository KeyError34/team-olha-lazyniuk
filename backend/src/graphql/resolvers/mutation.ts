import {User}  from '../../infrastructure/models/User.js'; // Импорт модели User

export const Mutation = {
  createUser: async (
    _: any,
    {
      userName,
      password,
      phonNumber,
      email,
      firstName,
      lastName,
     
    }: {
      userName: string;
      password: string;
      phonNumber: string;
      email: string;
      firstName: string;
      lastName: string;
      
    },
  ) => {
      const existingUserByEmail = await User.findOne({ email });
      const existingUserByUserName = await User.findOne({ userName });

      if (existingUserByEmail) {
        throw new Error('Invalid credentials.');
      }
      if (existingUserByUserName) {
        throw new Error('Invalid credentials.');
      }
    const newUser = new User({
      userName,
      password,
      phonNumber,
      email,
      firstName,
      lastName,
      
    });

   
    try {
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw new Error('Error creating user: ' + (error as Error).message);
    }
  },
};