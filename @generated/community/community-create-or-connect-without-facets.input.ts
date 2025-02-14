import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutFacetsInput } from './community-create-without-facets.input';

@InputType()
export class CommunityCreateOrConnectWithoutFacetsInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutFacetsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutFacetsInput)
    create!: CommunityCreateWithoutFacetsInput;
}
