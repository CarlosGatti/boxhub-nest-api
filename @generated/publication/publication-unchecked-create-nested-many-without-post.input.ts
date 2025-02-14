import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutPostInput } from './publication-create-without-post.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutPostInput } from './publication-create-or-connect-without-post.input';
import { PublicationCreateManyPostInputEnvelope } from './publication-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@InputType()
export class PublicationUncheckedCreateNestedManyWithoutPostInput {

    @Field(() => [PublicationCreateWithoutPostInput], {nullable:true})
    @Type(() => PublicationCreateWithoutPostInput)
    create?: Array<PublicationCreateWithoutPostInput>;

    @Field(() => [PublicationCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutPostInput>;

    @Field(() => PublicationCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyPostInputEnvelope)
    createMany?: PublicationCreateManyPostInputEnvelope;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;
}
