import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutFacetsInput } from './community-create-without-facets.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutFacetsInput } from './community-create-or-connect-without-facets.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityCreateNestedOneWithoutFacetsInput {

    @Field(() => CommunityCreateWithoutFacetsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutFacetsInput)
    create?: CommunityCreateWithoutFacetsInput;

    @Field(() => CommunityCreateOrConnectWithoutFacetsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutFacetsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutFacetsInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;
}
