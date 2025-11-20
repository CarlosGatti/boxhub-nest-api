import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class InsuranceScalarWhereInput {
    AND?: Array<InsuranceScalarWhereInput>;
    OR?: Array<InsuranceScalarWhereInput>;
    NOT?: Array<InsuranceScalarWhereInput>;
    id?: IntFilter;
    subcontractorId?: IntFilter;
    company?: StringFilter;
    expiration?: DateTimeFilter;
    documentUrl?: StringFilter;
    createdAt?: DateTimeFilter;
}
