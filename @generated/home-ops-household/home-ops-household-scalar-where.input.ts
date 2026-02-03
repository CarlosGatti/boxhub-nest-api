import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HomeOpsHouseholdScalarWhereInput {

    @Field(() => [HomeOpsHouseholdScalarWhereInput], {nullable:true})
    AND?: Array<HomeOpsHouseholdScalarWhereInput>;

    @Field(() => [HomeOpsHouseholdScalarWhereInput], {nullable:true})
    OR?: Array<HomeOpsHouseholdScalarWhereInput>;

    @Field(() => [HomeOpsHouseholdScalarWhereInput], {nullable:true})
    NOT?: Array<HomeOpsHouseholdScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    ownerId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    appId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
