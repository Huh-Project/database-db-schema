import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    static readonly modelName = "User";
    id: number;
    status: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
