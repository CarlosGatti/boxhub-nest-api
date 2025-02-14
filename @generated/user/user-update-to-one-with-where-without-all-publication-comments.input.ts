import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAllPublicationCommentsInput } from './user-update-without-all-publication-comments.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAllPublicationCommentsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAllPublicationCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAllPublicationCommentsInput)
    data!: UserUpdateWithoutAllPublicationCommentsInput;
}
