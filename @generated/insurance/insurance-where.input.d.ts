import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SubcontractorRelationFilter } from '../subcontractor/subcontractor-relation-filter.input';
export declare class InsuranceWhereInput {
    AND?: Array<InsuranceWhereInput>;
    OR?: Array<InsuranceWhereInput>;
    NOT?: Array<InsuranceWhereInput>;
    id?: IntFilter;
    subcontractorId?: IntFilter;
    company?: StringFilter;
    expiration?: DateTimeFilter;
    documentUrl?: StringFilter;
    createdAt?: DateTimeFilter;
    subcontractor?: SubcontractorRelationFilter;
}
