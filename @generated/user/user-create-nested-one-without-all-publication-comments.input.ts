import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAllPublicationCommentsInput } from './user-create-without-all-publication-comments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAllPublicationCommentsInput } from './user-create-or-connect-without-all-publication-comments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAllPublicationCommentsInput {

    @Field(() => UserCreateWithoutAllPublicationCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutAllPublicationCommentsInput)
    create?: UserCreateWithoutAllPublicationCommentsInput;

    @Field(() => UserCreateOrConnectWithoutAllPublicationCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAllPublicationCommentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAllPublicationCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
