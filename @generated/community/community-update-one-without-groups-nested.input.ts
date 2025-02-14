import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutGroupsInput } from './community-create-without-groups.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutGroupsInput } from './community-create-or-connect-without-groups.input';
import { CommunityUpsertWithoutGroupsInput } from './community-upsert-without-groups.input';
import { CommunityWhereInput } from './community-where.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateToOneWithWhereWithoutGroupsInput } from './community-update-to-one-with-where-without-groups.input';

@InputType()
export class CommunityUpdateOneWithoutGroupsNestedInput {

    @Field(() => CommunityCreateWithoutGroupsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutGroupsInput)
    create?: CommunityCreateWithoutGroupsInput;

    @Field(() => CommunityCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutGroupsInput;

    @Field(() => CommunityUpsertWithoutGroupsInput, {nullable:true})
    @Type(() => CommunityUpsertWithoutGroupsInput)
    upsert?: CommunityUpsertWithoutGroupsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    disconnect?: CommunityWhereInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    delete?: CommunityWhereInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateToOneWithWhereWithoutGroupsInput, {nullable:true})
    @Type(() => CommunityUpdateToOneWithWhereWithoutGroupsInput)
    update?: CommunityUpdateToOneWithWhereWithoutGroupsInput;
}
