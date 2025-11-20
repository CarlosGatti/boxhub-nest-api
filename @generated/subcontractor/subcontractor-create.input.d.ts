import { InsuranceCreateNestedManyWithoutSubcontractorInput } from '../insurance/insurance-create-nested-many-without-subcontractor.input';
export declare class SubcontractorCreateInput {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    trade: string;
    bankAccount: string;
    paymentPreference: string;
    notes?: string;
    priority?: boolean;
    createdViaPublicForm?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    insurances?: InsuranceCreateNestedManyWithoutSubcontractorInput;
}
