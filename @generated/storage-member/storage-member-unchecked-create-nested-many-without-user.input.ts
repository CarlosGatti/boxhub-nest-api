import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';
import { Type } from 'class-transformer';
import { StorageMemberCreateOrConnectWithoutUserInput } from './storage-member-create-or-connect-without-user.input';
import { StorageMemberCreateManyUserInputEnvelope } from './storage-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';

@InputType()
export class StorageMemberUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [StorageMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => StorageMemberCreateWithoutUserInput)
    create?: Array<StorageMemberCreateWithoutUserInput>;

    @Field(() => [StorageMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => StorageMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<StorageMemberCreateOrConnectWithoutUserInput>;

    @Field(() => StorageMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => StorageMemberCreateManyUserInputEnvelope)
    createMany?: StorageMemberCreateManyUserInputEnvelope;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;
}
