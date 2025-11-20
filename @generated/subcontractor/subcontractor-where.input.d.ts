import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { InsuranceListRelationFilter } from '../insurance/insurance-list-relation-filter.input';
export declare class SubcontractorWhereInput {
    AND?: Array<SubcontractorWhereInput>;
    OR?: Array<SubcontractorWhereInput>;
    NOT?: Array<SubcontractorWhereInput>;
    id?: IntFilter;
    companyName?: StringFilter;
    contactName?: StringFilter;
    email?: StringFilter;
    phone?: StringFilter;
    trade?: StringFilter;
    bankAccount?: StringFilter;
    paymentPreference?: StringFilter;
    notes?: StringNullableFilter;
    priority?: BoolFilter;
    createdViaPublicForm?: BoolFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    insurances?: InsuranceListRelationFilter;
}
