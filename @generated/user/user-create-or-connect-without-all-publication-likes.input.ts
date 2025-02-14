import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAllPublicationLikesInput } from './user-create-without-all-publication-likes.input';

@InputType()
export class UserCreateOrConnectWithoutAllPublicationLikesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAllPublicationLikesInput, {nullable:false})
    @Type(() => UserCreateWithoutAllPublicationLikesInput)
    create!: UserCreateWithoutAllPublicationLikesInput;
}
