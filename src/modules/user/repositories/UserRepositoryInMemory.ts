import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

export class UserRepositoryInMemory extends UserRepository {
    public users: User[] = [];

    async create(user: User): Promise<void> {
        this.users.push(user);
    }
}