import { LogType } from '../prisma/log-type.enum';
export declare class ConstructionLogCreateManyUserInput {
    id?: number;
    projectId: number;
    title: string;
    description: string;
    type: keyof typeof LogType;
    images?: any;
    createdAt?: Date | string;
}
