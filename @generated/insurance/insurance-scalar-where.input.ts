import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class InsuranceScalarWhereInput {

    @Field(() => [InsuranceScalarWhereInput], {nullable:true})
    AND?: Array<InsuranceScalarWhereInput>;

    @Field(() => [InsuranceScalarWhereInput], {nullable:true})
    OR?: Array<InsuranceScalarWhereInput>;

    @Field(() => [InsuranceScalarWhereInput], {nullable:true})
    NOT?: Array<InsuranceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    subcontractorId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    company?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiration?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    documentUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
