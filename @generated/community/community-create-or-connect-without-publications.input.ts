import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutPublicationsInput } from './community-create-without-publications.input';

@InputType()
export class CommunityCreateOrConnectWithoutPublicationsInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutPublicationsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutPublicationsInput)
    create!: CommunityCreateWithoutPublicationsInput;
}
