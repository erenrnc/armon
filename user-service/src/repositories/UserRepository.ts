import { EntityRepository, Repository, getConnection } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAllUsers(): Promise<User[]> {
    return await this.find();
  }

  async findUserById(id: number): Promise<User | undefined> {
    const user = await this.findOne({ where: { id } });
    return user || undefined;
}

  async createUser(user: User): Promise<User> {
    return await this.save(user);
  }

  async updateUser(id: number, user: Partial<User>): Promise<User | undefined> {
    await this.update(id, user);
    return this.findUserById(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this.delete(id);
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { email } });
    return user || undefined;
}

  async bulkCreateUsers(users: User[]): Promise<User[]> {
    return await this.save(users);
  }
}