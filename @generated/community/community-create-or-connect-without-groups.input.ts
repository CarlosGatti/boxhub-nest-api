import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutGroupsInput } from './community-create-without-groups.input';

@InputType()
export class CommunityCreateOrConnectWithoutGroupsInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutGroupsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutGroupsInput)
    create!: CommunityCreateWithoutGroupsInput;
}
