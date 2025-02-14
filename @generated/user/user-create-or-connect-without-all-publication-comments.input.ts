import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAllPublicationCommentsInput } from './user-create-without-all-publication-comments.input';

@InputType()
export class UserCreateOrConnectWithoutAllPublicationCommentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAllPublicationCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutAllPublicationCommentsInput)
    create!: UserCreateWithoutAllPublicationCommentsInput;
}
