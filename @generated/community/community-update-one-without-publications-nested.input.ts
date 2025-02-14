import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutPublicationsInput } from './community-create-without-publications.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutPublicationsInput } from './community-create-or-connect-without-publications.input';
import { CommunityUpsertWithoutPublicationsInput } from './community-upsert-without-publications.input';
import { CommunityWhereInput } from './community-where.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateToOneWithWhereWithoutPublicationsInput } from './community-update-to-one-with-where-without-publications.input';

@InputType()
export class CommunityUpdateOneWithoutPublicationsNestedInput {

    @Field(() => CommunityCreateWithoutPublicationsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutPublicationsInput)
    create?: CommunityCreateWithoutPublicationsInput;

    @Field(() => CommunityCreateOrConnectWithoutPublicationsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutPublicationsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutPublicationsInput;

    @Field(() => CommunityUpsertWithoutPublicationsInput, {nullable:true})
    @Type(() => CommunityUpsertWithoutPublicationsInput)
    upsert?: CommunityUpsertWithoutPublicationsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    disconnect?: CommunityWhereInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    delete?: CommunityWhereInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateToOneWithWhereWithoutPublicationsInput, {nullable:true})
    @Type(() => CommunityUpdateToOneWithWhereWithoutPublicationsInput)
    update?: CommunityUpdateToOneWithWhereWithoutPublicationsInput;
}
