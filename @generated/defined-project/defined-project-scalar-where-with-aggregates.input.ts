import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDefinedProjectServiceTypeWithAggregatesFilter } from '../prisma/enum-defined-project-service-type-with-aggregates-filter.input';
import { EnumDefinedProjectStatusWithAggregatesFilter } from '../prisma/enum-defined-project-status-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedProjectScalarWhereWithAggregatesInput {

    @Field(() => [DefinedProjectScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedProjectScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedProjectScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedProjectScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedProjectScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedProjectScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    clientId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumDefinedProjectServiceTypeWithAggregatesFilter, {nullable:true})
    serviceType?: EnumDefinedProjectServiceTypeWithAggregatesFilter;

    @Field(() => EnumDefinedProjectStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedProjectStatusWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    budget?: FloatNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deadline?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    source?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    assignedTo?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    supplierId?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
