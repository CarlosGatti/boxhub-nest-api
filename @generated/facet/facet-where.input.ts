import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { CommunityNullableRelationFilter } from '../community/community-nullable-relation-filter.input';
import { FacetValueListRelationFilter } from '../facet-value/facet-value-list-relation-filter.input';

@InputType()
export class FacetWhereInput {

    @Field(() => [FacetWhereInput], {nullable:true})
    AND?: Array<FacetWhereInput>;

    @Field(() => [FacetWhereInput], {nullable:true})
    OR?: Array<FacetWhereInput>;

    @Field(() => [FacetWhereInput], {nullable:true})
    NOT?: Array<FacetWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    communityId?: IntNullableFilter;

    @Field(() => CommunityNullableRelationFilter, {nullable:true})
    Community?: CommunityNullableRelationFilter;

    @Field(() => FacetValueListRelationFilter, {nullable:true})
    values?: FacetValueListRelationFilter;
}
