import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCommunityPlanOrThrowArgs {

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:false})
    @Type(() => CommunityPlanWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;
}
