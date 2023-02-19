import { BaseEntity } from "typeorm";
export declare class Users extends BaseEntity {
    static readonly modelName = "Users";
    id: number;
    status: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
