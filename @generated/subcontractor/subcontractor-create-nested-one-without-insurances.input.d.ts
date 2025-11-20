import { SubcontractorCreateWithoutInsurancesInput } from './subcontractor-create-without-insurances.input';
import { SubcontractorCreateOrConnectWithoutInsurancesInput } from './subcontractor-create-or-connect-without-insurances.input';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
export declare class SubcontractorCreateNestedOneWithoutInsurancesInput {
    create?: SubcontractorCreateWithoutInsurancesInput;
    connectOrCreate?: SubcontractorCreateOrConnectWithoutInsurancesInput;
    connect?: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;
}
