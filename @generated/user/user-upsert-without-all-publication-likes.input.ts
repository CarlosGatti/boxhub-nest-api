import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAllPublicationLikesInput } from './user-update-without-all-publication-likes.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAllPublicationLikesInput } from './user-create-without-all-publication-likes.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAllPublicationLikesInput {

    @Field(() => UserUpdateWithoutAllPublicationLikesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAllPublicationLikesInput)
    update!: UserUpdateWithoutAllPublicationLikesInput;

    @Field(() => UserCreateWithoutAllPublicationLikesInput, {nullable:false})
    @Type(() => UserCreateWithoutAllPublicationLikesInput)
    create!: UserCreateWithoutAllPublicationLikesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
