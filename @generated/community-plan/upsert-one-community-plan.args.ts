import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityPlanCreateInput } from './community-plan-create.input';
import { CommunityPlanUpdateInput } from './community-plan-update.input';

@ArgsType()
export class UpsertOneCommunityPlanArgs {

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:false})
    @Type(() => CommunityPlanWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;

    @Field(() => CommunityPlanCreateInput, {nullable:false})
    @Type(() => CommunityPlanCreateInput)
    create!: CommunityPlanCreateInput;

    @Field(() => CommunityPlanUpdateInput, {nullable:false})
    @Type(() => CommunityPlanUpdateInput)
    update!: CommunityPlanUpdateInput;
}
