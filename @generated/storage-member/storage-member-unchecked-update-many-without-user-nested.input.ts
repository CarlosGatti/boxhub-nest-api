import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';
import { Type } from 'class-transformer';
import { StorageMemberCreateOrConnectWithoutUserInput } from './storage-member-create-or-connect-without-user.input';
import { StorageMemberUpsertWithWhereUniqueWithoutUserInput } from './storage-member-upsert-with-where-unique-without-user.input';
import { StorageMemberCreateManyUserInputEnvelope } from './storage-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { StorageMemberUpdateWithWhereUniqueWithoutUserInput } from './storage-member-update-with-where-unique-without-user.input';
import { StorageMemberUpdateManyWithWhereWithoutUserInput } from './storage-member-update-many-with-where-without-user.input';
import { StorageMemberScalarWhereInput } from './storage-member-scalar-where.input';

@InputType()
export class StorageMemberUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [StorageMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => StorageMemberCreateWithoutUserInput)
    create?: Array<StorageMemberCreateWithoutUserInput>;

    @Field(() => [StorageMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => StorageMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<StorageMemberCreateOrConnectWithoutUserInput>;

    @Field(() => [StorageMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => StorageMemberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<StorageMemberUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => StorageMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => StorageMemberCreateManyUserInputEnvelope)
    createMany?: StorageMemberCreateManyUserInputEnvelope;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => StorageMemberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<StorageMemberUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [StorageMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => StorageMemberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<StorageMemberUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [StorageMemberScalarWhereInput], {nullable:true})
    @Type(() => StorageMemberScalarWhereInput)
    deleteMany?: Array<StorageMemberScalarWhereInput>;
}
