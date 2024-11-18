import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface UserSchema {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export class User {
    props: UserSchema;
    _id: string;

    constructor(props: Replace<UserSchema, {createdAt?: Date, updatedAt?: Date}>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date()
        };
        this._id = id || randomUUID();
    }

    get id (){
        return this._id;
    }

    get name() {
        return this.props.name;
    }

    set name(name: string) {
        this.props.name = name;
    }

    get email() {
        return this.props.email;
    }

    set email(email: string) {  
        this.props.email = email;
    }

    get password() {
        return this.props.password;
    }

    set password(password: string) {
        this.props.password = password;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }
}