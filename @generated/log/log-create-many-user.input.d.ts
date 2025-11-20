import { LogAction } from '../prisma/log-action.enum';
export declare class LogCreateManyUserInput {
    id?: number;
    action: keyof typeof LogAction;
    details?: string;
    route?: string;
    metadata?: any;
    ipAddress?: string;
    createdAt?: Date | string;
}
