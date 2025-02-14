import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeCreateWithoutUserInput } from './publication-like-create-without-user.input';
import { Type } from 'class-transformer';
import { PublicationLikeCreateOrConnectWithoutUserInput } from './publication-like-create-or-connect-without-user.input';
import { PublicationLikeUpsertWithWhereUniqueWithoutUserInput } from './publication-like-upsert-with-where-unique-without-user.input';
import { PublicationLikeCreateManyUserInputEnvelope } from './publication-like-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { PublicationLikeUpdateWithWhereUniqueWithoutUserInput } from './publication-like-update-with-where-unique-without-user.input';
import { PublicationLikeUpdateManyWithWhereWithoutUserInput } from './publication-like-update-many-with-where-without-user.input';
import { PublicationLikeScalarWhereInput } from './publication-like-scalar-where.input';

@InputType()
export class PublicationLikeUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [PublicationLikeCreateWithoutUserInput], {nullable:true})
    @Type(() => PublicationLikeCreateWithoutUserInput)
    create?: Array<PublicationLikeCreateWithoutUserInput>;

    @Field(() => [PublicationLikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PublicationLikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PublicationLikeCreateOrConnectWithoutUserInput>;

    @Field(() => [PublicationLikeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PublicationLikeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PublicationLikeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PublicationLikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PublicationLikeCreateManyUserInputEnvelope)
    createMany?: PublicationLikeCreateManyUserInputEnvelope;

    @Field(() => [PublicationLikeWhereUniqueInput], {nullable:true})
    @Type(() => PublicationLikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationLikeWhereUniqueInput], {nullable:true})
    @Type(() => PublicationLikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationLikeWhereUniqueInput], {nullable:true})
    @Type(() => PublicationLikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationLikeWhereUniqueInput], {nullable:true})
    @Type(() => PublicationLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationLikeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PublicationLikeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PublicationLikeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PublicationLikeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PublicationLikeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PublicationLikeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PublicationLikeScalarWhereInput], {nullable:true})
    @Type(() => PublicationLikeScalarWhereInput)
    deleteMany?: Array<PublicationLikeScalarWhereInput>;
}
