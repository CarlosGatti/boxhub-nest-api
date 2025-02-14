import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommunityPlanWhereInput } from './community-plan-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { CommunityNullableRelationFilter } from '../community/community-nullable-relation-filter.input';

@InputType()
export class CommunityPlanWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CommunityPlanWhereInput], {nullable:true})
    AND?: Array<CommunityPlanWhereInput>;

    @Field(() => [CommunityPlanWhereInput], {nullable:true})
    OR?: Array<CommunityPlanWhereInput>;

    @Field(() => [CommunityPlanWhereInput], {nullable:true})
    NOT?: Array<CommunityPlanWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    communityId?: IntNullableFilter;

    @Field(() => CommunityNullableRelationFilter, {nullable:true})
    community?: CommunityNullableRelationFilter;
}
