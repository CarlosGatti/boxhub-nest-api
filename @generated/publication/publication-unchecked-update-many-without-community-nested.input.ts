import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutCommunityInput } from './publication-create-without-community.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutCommunityInput } from './publication-create-or-connect-without-community.input';
import { PublicationUpsertWithWhereUniqueWithoutCommunityInput } from './publication-upsert-with-where-unique-without-community.input';
import { PublicationCreateManyCommunityInputEnvelope } from './publication-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { PublicationUpdateWithWhereUniqueWithoutCommunityInput } from './publication-update-with-where-unique-without-community.input';
import { PublicationUpdateManyWithWhereWithoutCommunityInput } from './publication-update-many-with-where-without-community.input';
import { PublicationScalarWhereInput } from './publication-scalar-where.input';

@InputType()
export class PublicationUncheckedUpdateManyWithoutCommunityNestedInput {

    @Field(() => [PublicationCreateWithoutCommunityInput], {nullable:true})
    @Type(() => PublicationCreateWithoutCommunityInput)
    create?: Array<PublicationCreateWithoutCommunityInput>;

    @Field(() => [PublicationCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutCommunityInput>;

    @Field(() => [PublicationUpsertWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => PublicationUpsertWithWhereUniqueWithoutCommunityInput)
    upsert?: Array<PublicationUpsertWithWhereUniqueWithoutCommunityInput>;

    @Field(() => PublicationCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyCommunityInputEnvelope)
    createMany?: PublicationCreateManyCommunityInputEnvelope;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationUpdateWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => PublicationUpdateWithWhereUniqueWithoutCommunityInput)
    update?: Array<PublicationUpdateWithWhereUniqueWithoutCommunityInput>;

    @Field(() => [PublicationUpdateManyWithWhereWithoutCommunityInput], {nullable:true})
    @Type(() => PublicationUpdateManyWithWhereWithoutCommunityInput)
    updateMany?: Array<PublicationUpdateManyWithWhereWithoutCommunityInput>;

    @Field(() => [PublicationScalarWhereInput], {nullable:true})
    @Type(() => PublicationScalarWhereInput)
    deleteMany?: Array<PublicationScalarWhereInput>;
}
