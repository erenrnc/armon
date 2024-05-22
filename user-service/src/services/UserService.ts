import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

export class UserService {
  private userRepository = getCustomRepository(UserRepository);

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAllUsers();
  }

  async getUserById(id: number): Promise<User | undefined> {
    return await this.userRepository.findUserById(id);
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.createUser(user);
  }

  async updateUser(id: number, user: Partial<User>): Promise<User | undefined> {
    return await this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.deleteUser(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findUserByEmail(email);
  }

  async createUsers(users: User[]): Promise<User[]> {
    return await this.userRepository.bulkCreateUsers(users);
  }
}