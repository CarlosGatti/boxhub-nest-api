import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAllPublicationLikesInput } from './user-create-without-all-publication-likes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAllPublicationLikesInput } from './user-create-or-connect-without-all-publication-likes.input';
import { UserUpsertWithoutAllPublicationLikesInput } from './user-upsert-without-all-publication-likes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAllPublicationLikesInput } from './user-update-to-one-with-where-without-all-publication-likes.input';

@InputType()
export class UserUpdateOneRequiredWithoutAllPublicationLikesNestedInput {

    @Field(() => UserCreateWithoutAllPublicationLikesInput, {nullable:true})
    @Type(() => UserCreateWithoutAllPublicationLikesInput)
    create?: UserCreateWithoutAllPublicationLikesInput;

    @Field(() => UserCreateOrConnectWithoutAllPublicationLikesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAllPublicationLikesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAllPublicationLikesInput;

    @Field(() => UserUpsertWithoutAllPublicationLikesInput, {nullable:true})
    @Type(() => UserUpsertWithoutAllPublicationLikesInput)
    upsert?: UserUpsertWithoutAllPublicationLikesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAllPublicationLikesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAllPublicationLikesInput)
    update?: UserUpdateToOneWithWhereWithoutAllPublicationLikesInput;
}
