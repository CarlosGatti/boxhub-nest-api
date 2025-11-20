import { SubcontractorUpdateInput } from './subcontractor-update.input';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
export declare class UpdateOneSubcontractorArgs {
    data: SubcontractorUpdateInput;
    where: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;
}
