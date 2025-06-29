import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLogTypeFilter } from '../prisma/enum-log-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ConstructionLogScalarWhereInput {

    @Field(() => [ConstructionLogScalarWhereInput], {nullable:true})
    AND?: Array<ConstructionLogScalarWhereInput>;

    @Field(() => [ConstructionLogScalarWhereInput], {nullable:true})
    OR?: Array<ConstructionLogScalarWhereInput>;

    @Field(() => [ConstructionLogScalarWhereInput], {nullable:true})
    NOT?: Array<ConstructionLogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumLogTypeFilter, {nullable:true})
    type?: EnumLogTypeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    images?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
