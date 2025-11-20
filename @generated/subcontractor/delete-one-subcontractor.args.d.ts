import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
export declare class DeleteOneSubcontractorArgs {
    where: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;
}
