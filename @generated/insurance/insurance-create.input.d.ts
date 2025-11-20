import { SubcontractorCreateNestedOneWithoutInsurancesInput } from '../subcontractor/subcontractor-create-nested-one-without-insurances.input';
export declare class InsuranceCreateInput {
    company: string;
    expiration: Date | string;
    documentUrl: string;
    createdAt?: Date | string;
    subcontractor: SubcontractorCreateNestedOneWithoutInsurancesInput;
}
