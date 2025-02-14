import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeCreateWithoutPublicationInput } from './publication-like-create-without-publication.input';
import { Type } from 'class-transformer';
import { PublicationLikeCreateOrConnectWithoutPublicationInput } from './publication-like-create-or-connect-without-publication.input';
import { PublicationLikeUpsertWithWhereUniqueWithoutPublicationInput } from './publication-like-upsert-with-where-unique-without-publication.input';
import { PublicationLikeCreateManyPublicationInputEnvelope } from './publication-like-create-many-publication-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { PublicationLikeUpdateWithWhereUniqueWithoutPublicationInput } from './publication-like-update-with-where-unique-without-publication.input';
import { PublicationLikeUpdateManyWithWhereWithoutPublicationInput } from './publication-like-update-many-with-where-without-publication.input';
import { PublicationLikeScalarWhereInput } from './publication-like-scalar-where.input';

@InputType()
export class PublicationLikeUpdateManyWithoutPublicationNestedInput {

    @Field(() => [PublicationLikeCreateWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationLikeCreateWithoutPublicationInput)
    create?: Array<PublicationLikeCreateWithoutPublicationInput>;

    @Field(() => [PublicationLikeCreateOrConnectWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationLikeCreateOrConnectWithoutPublicationInput)
    connectOrCreate?: Array<PublicationLikeCreateOrConnectWithoutPublicationInput>;

    @Field(() => [PublicationLikeUpsertWithWhereUniqueWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationLikeUpsertWithWhereUniqueWithoutPublicationInput)
    upsert?: Array<PublicationLikeUpsertWithWhereUniqueWithoutPublicationInput>;

    @Field(() => PublicationLikeCreateManyPublicationInputEnvelope, {nullable:true})
    @Type(() => PublicationLikeCreateManyPublicationInputEnvelope)
    createMany?: PublicationLikeCreateManyPublicationInputEnvelope;

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

    @Field(() => [PublicationLikeUpdateWithWhereUniqueWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationLikeUpdateWithWhereUniqueWithoutPublicationInput)
    update?: Array<PublicationLikeUpdateWithWhereUniqueWithoutPublicationInput>;

    @Field(() => [PublicationLikeUpdateManyWithWhereWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationLikeUpdateManyWithWhereWithoutPublicationInput)
    updateMany?: Array<PublicationLikeUpdateManyWithWhereWithoutPublicationInput>;

    @Field(() => [PublicationLikeScalarWhereInput], {nullable:true})
    @Type(() => PublicationLikeScalarWhereInput)
    deleteMany?: Array<PublicationLikeScalarWhereInput>;
}
