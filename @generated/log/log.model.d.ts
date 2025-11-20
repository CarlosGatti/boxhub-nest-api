import { LogAction } from '../prisma/log-action.enum';
import { User } from '../user/user.model';
export declare class Log {
    id: number;
    action: keyof typeof LogAction;
    userId: number | null;
    details: string | null;
    route: string | null;
    metadata: any | null;
    ipAddress: string | null;
    createdAt: Date;
    user?: User | null;
}
