import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutOwnerInput } from './community-update-without-owner.input';

@InputType()
export class CommunityUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutOwnerInput)
    data!: CommunityUpdateWithoutOwnerInput;
}
