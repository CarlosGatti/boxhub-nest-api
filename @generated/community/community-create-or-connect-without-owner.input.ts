import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutOwnerInput } from './community-create-without-owner.input';

@InputType()
export class CommunityCreateOrConnectWithoutOwnerInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutOwnerInput, {nullable:false})
    @Type(() => CommunityCreateWithoutOwnerInput)
    create!: CommunityCreateWithoutOwnerInput;
}
