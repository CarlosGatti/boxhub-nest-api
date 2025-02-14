import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutCommentsInput } from './publication-create-without-comments.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutCommentsInput } from './publication-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@InputType()
export class PublicationCreateNestedOneWithoutCommentsInput {

    @Field(() => PublicationCreateWithoutCommentsInput, {nullable:true})
    @Type(() => PublicationCreateWithoutCommentsInput)
    create?: PublicationCreateWithoutCommentsInput;

    @Field(() => PublicationCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: PublicationCreateOrConnectWithoutCommentsInput;

    @Field(() => PublicationWhereUniqueInput, {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;
}
