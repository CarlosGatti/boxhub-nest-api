import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { InsuranceUpdateWithoutSubcontractorInput } from './insurance-update-without-subcontractor.input';
export declare class InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput {
    where: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;
    data: InsuranceUpdateWithoutSubcontractorInput;
}
