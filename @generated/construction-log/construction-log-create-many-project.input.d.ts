import { LogType } from '../prisma/log-type.enum';
export declare class ConstructionLogCreateManyProjectInput {
    id?: number;
    userId: number;
    title: string;
    description: string;
    type: keyof typeof LogType;
    images?: any;
    createdAt?: Date | string;
}
