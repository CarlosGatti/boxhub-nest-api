import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutLikesInput } from './publication-create-without-likes.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutLikesInput } from './publication-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@InputType()
export class PublicationCreateNestedOneWithoutLikesInput {

    @Field(() => PublicationCreateWithoutLikesInput, {nullable:true})
    @Type(() => PublicationCreateWithoutLikesInput)
    create?: PublicationCreateWithoutLikesInput;

    @Field(() => PublicationCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutLikesInput)
    connectOrCreate?: PublicationCreateOrConnectWithoutLikesInput;

    @Field(() => PublicationWhereUniqueInput, {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;
}
