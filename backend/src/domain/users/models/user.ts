export class User {
  constructor(
    public id: string,
    public userName: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public phoneNumber?: string,
    public role: 'admin' | 'user' = 'user',
  ) {}

  changeEmail(newEmail: string) {
    if (!newEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new Error('Invalid email format');
    }
    this.email = newEmail;
  }

  changePassword(newPassword: string) {
    if (newPassword.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }
    this.password = newPassword;
  }
}
