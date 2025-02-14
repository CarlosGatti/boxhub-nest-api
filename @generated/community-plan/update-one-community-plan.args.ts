import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanUpdateInput } from './community-plan-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';

@ArgsType()
export class UpdateOneCommunityPlanArgs {

    @Field(() => CommunityPlanUpdateInput, {nullable:false})
    @Type(() => CommunityPlanUpdateInput)
    data!: CommunityPlanUpdateInput;

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:false})
    @Type(() => CommunityPlanWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;
}
