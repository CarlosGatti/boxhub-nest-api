import { Insurance } from '../insurance/insurance.model';
import { SubcontractorCount } from './subcontractor-count.output';
export declare class Subcontractor {
    id: number;
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    trade: string;
    bankAccount: string;
    paymentPreference: string;
    notes: string | null;
    priority: boolean;
    createdViaPublicForm: boolean;
    createdAt: Date;
    updatedAt: Date;
    insurances?: Array<Insurance>;
    _count?: SubcontractorCount;
}
