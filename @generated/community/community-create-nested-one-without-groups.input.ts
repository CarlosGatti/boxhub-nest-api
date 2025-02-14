import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutGroupsInput } from './community-create-without-groups.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutGroupsInput } from './community-create-or-connect-without-groups.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityCreateNestedOneWithoutGroupsInput {

    @Field(() => CommunityCreateWithoutGroupsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutGroupsInput)
    create?: CommunityCreateWithoutGroupsInput;

    @Field(() => CommunityCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutGroupsInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;
}
