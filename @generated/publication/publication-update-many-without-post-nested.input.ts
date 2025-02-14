import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutPostInput } from './publication-create-without-post.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutPostInput } from './publication-create-or-connect-without-post.input';
import { PublicationUpsertWithWhereUniqueWithoutPostInput } from './publication-upsert-with-where-unique-without-post.input';
import { PublicationCreateManyPostInputEnvelope } from './publication-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { PublicationUpdateWithWhereUniqueWithoutPostInput } from './publication-update-with-where-unique-without-post.input';
import { PublicationUpdateManyWithWhereWithoutPostInput } from './publication-update-many-with-where-without-post.input';
import { PublicationScalarWhereInput } from './publication-scalar-where.input';

@InputType()
export class PublicationUpdateManyWithoutPostNestedInput {

    @Field(() => [PublicationCreateWithoutPostInput], {nullable:true})
    @Type(() => PublicationCreateWithoutPostInput)
    create?: Array<PublicationCreateWithoutPostInput>;

    @Field(() => [PublicationCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutPostInput>;

    @Field(() => [PublicationUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => PublicationUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<PublicationUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => PublicationCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyPostInputEnvelope)
    createMany?: PublicationCreateManyPostInputEnvelope;

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

    @Field(() => [PublicationUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => PublicationUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<PublicationUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [PublicationUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => PublicationUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<PublicationUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [PublicationScalarWhereInput], {nullable:true})
    @Type(() => PublicationScalarWhereInput)
    deleteMany?: Array<PublicationScalarWhereInput>;
}
