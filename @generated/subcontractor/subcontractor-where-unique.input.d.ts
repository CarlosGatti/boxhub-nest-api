import { SubcontractorWhereInput } from './subcontractor-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { InsuranceListRelationFilter } from '../insurance/insurance-list-relation-filter.input';
export declare class SubcontractorWhereUniqueInput {
    id?: number;
    AND?: Array<SubcontractorWhereInput>;
    OR?: Array<SubcontractorWhereInput>;
    NOT?: Array<SubcontractorWhereInput>;
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
