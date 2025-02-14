import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAllPublicationCommentsInput } from './user-update-without-all-publication-comments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAllPublicationCommentsInput } from './user-create-without-all-publication-comments.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAllPublicationCommentsInput {

    @Field(() => UserUpdateWithoutAllPublicationCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAllPublicationCommentsInput)
    update!: UserUpdateWithoutAllPublicationCommentsInput;

    @Field(() => UserCreateWithoutAllPublicationCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutAllPublicationCommentsInput)
    create!: UserCreateWithoutAllPublicationCommentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
