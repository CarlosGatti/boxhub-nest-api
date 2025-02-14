import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutPublicationsInput } from './community-create-without-publications.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutPublicationsInput } from './community-create-or-connect-without-publications.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityCreateNestedOneWithoutPublicationsInput {

    @Field(() => CommunityCreateWithoutPublicationsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutPublicationsInput)
    create?: CommunityCreateWithoutPublicationsInput;

    @Field(() => CommunityCreateOrConnectWithoutPublicationsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutPublicationsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutPublicationsInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;
}
