import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanWhereInput } from './community-plan-where.input';
import { Type } from 'class-transformer';
import { CommunityPlanOrderByWithRelationInput } from './community-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommunityPlanScalarFieldEnum } from './community-plan-scalar-field.enum';

@ArgsType()
export class FindFirstCommunityPlanArgs {

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    where?: CommunityPlanWhereInput;

    @Field(() => [CommunityPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunityPlanOrderByWithRelationInput>;

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommunityPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommunityPlanScalarFieldEnum>;
}
