import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
import { SubcontractorCreateWithoutInsurancesInput } from './subcontractor-create-without-insurances.input';
export declare class SubcontractorCreateOrConnectWithoutInsurancesInput {
    where: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;
    create: SubcontractorCreateWithoutInsurancesInput;
}
