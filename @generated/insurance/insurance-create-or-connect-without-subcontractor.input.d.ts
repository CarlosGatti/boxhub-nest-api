import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';
export declare class InsuranceCreateOrConnectWithoutSubcontractorInput {
    where: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;
    create: InsuranceCreateWithoutSubcontractorInput;
}
