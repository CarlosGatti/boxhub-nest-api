import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InsuranceWhereInput } from './insurance-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SubcontractorRelationFilter } from '../subcontractor/subcontractor-relation-filter.input';

@InputType()
export class InsuranceWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [InsuranceWhereInput], {nullable:true})
    AND?: Array<InsuranceWhereInput>;

    @Field(() => [InsuranceWhereInput], {nullable:true})
    OR?: Array<InsuranceWhereInput>;

    @Field(() => [InsuranceWhereInput], {nullable:true})
    NOT?: Array<InsuranceWhereInput>;

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

    @Field(() => SubcontractorRelationFilter, {nullable:true})
    subcontractor?: SubcontractorRelationFilter;
}
