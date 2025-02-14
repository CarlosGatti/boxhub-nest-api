import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAllPublicationLikesInput } from './user-update-without-all-publication-likes.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAllPublicationLikesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAllPublicationLikesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAllPublicationLikesInput)
    data!: UserUpdateWithoutAllPublicationLikesInput;
}
