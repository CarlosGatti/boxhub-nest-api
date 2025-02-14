import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutFacetsInput } from './community-create-without-facets.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutFacetsInput } from './community-create-or-connect-without-facets.input';
import { CommunityUpsertWithoutFacetsInput } from './community-upsert-without-facets.input';
import { CommunityWhereInput } from './community-where.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateToOneWithWhereWithoutFacetsInput } from './community-update-to-one-with-where-without-facets.input';

@InputType()
export class CommunityUpdateOneWithoutFacetsNestedInput {

    @Field(() => CommunityCreateWithoutFacetsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutFacetsInput)
    create?: CommunityCreateWithoutFacetsInput;

    @Field(() => CommunityCreateOrConnectWithoutFacetsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutFacetsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutFacetsInput;

    @Field(() => CommunityUpsertWithoutFacetsInput, {nullable:true})
    @Type(() => CommunityUpsertWithoutFacetsInput)
    upsert?: CommunityUpsertWithoutFacetsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    disconnect?: CommunityWhereInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    delete?: CommunityWhereInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateToOneWithWhereWithoutFacetsInput, {nullable:true})
    @Type(() => CommunityUpdateToOneWithWhereWithoutFacetsInput)
    update?: CommunityUpdateToOneWithWhereWithoutFacetsInput;
}
