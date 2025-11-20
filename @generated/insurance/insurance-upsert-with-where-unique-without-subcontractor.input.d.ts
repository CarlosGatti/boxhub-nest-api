import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { InsuranceUpdateWithoutSubcontractorInput } from './insurance-update-without-subcontractor.input';
import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';
export declare class InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput {
    where: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;
    update: InsuranceUpdateWithoutSubcontractorInput;
    create: InsuranceCreateWithoutSubcontractorInput;
}
