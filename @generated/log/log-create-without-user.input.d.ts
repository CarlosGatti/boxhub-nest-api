import { LogAction } from '../prisma/log-action.enum';
export declare class LogCreateWithoutUserInput {
    action: keyof typeof LogAction;
    details?: string;
    route?: string;
    metadata?: any;
    ipAddress?: string;
    createdAt?: Date | string;
}
