// import UserRepository from '../repositories/userRepository.js';

// interface UserData {
//   // Define the structure of userData here
//   name: string;
//   email: string;
//   password: string;
// }

// class UserService {
//   private userRepository: UserRepository;

//   constructor() {
//     this.userRepository = new UserRepository();
//   }

//   // Create a new user
//   async createUser(userData: UserData): Promise<UserData> {
//     const newUser = await this.userRepository.create(userData);
//     return newUser;
//   }

//   // Get a user by ID
//   async getUserById(id: string): Promise<UserData | null> {
//     const user = await this.userRepository.findById(id);
//     return user;
//   }

//   // Update a user's information
//   async updateUser(id: string, userData: UserData): Promise<UserData> {
//     const updatedUser = await this.userRepository.update(id, userData);
//     return updatedUser;
//   }

//   // Delete a user
//   async deleteUser(id: string): Promise<boolean> {
//     const response = await this.userRepository.delete(id);
//     return response;
//   }
// }

// export default UserService;
