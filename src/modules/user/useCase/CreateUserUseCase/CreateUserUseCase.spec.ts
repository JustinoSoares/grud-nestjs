import { compare } from "bcrypt";
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
describe('create user', () => {

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it('should be able to create a new user', async () => {
        expect(userRepositoryInMemory.users).toEqual([]);

        const user = await createUserUseCase.execute({
            name : 'John Doe',
            email : 'john@gmail.com',
            password : '123456'
        });
        expect(userRepositoryInMemory.users).toEqual([user]);
    });

    it('should be able to create a new user with password encrypt', async () => {
        const userPasswordWithoutEncrypt = '123456';

        const user = await createUserUseCase.execute({
            name : 'John Doe',
            email : 'john@gmail.com',
            password : userPasswordWithoutEncrypt
        });

        const userHasPasswordEncrypted = await compare(userPasswordWithoutEncrypt, user.password);
        expect(userHasPasswordEncrypted).toBeTruthy();
    });
});