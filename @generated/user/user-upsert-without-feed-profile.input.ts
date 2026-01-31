import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFeedProfileInput } from './user-update-without-feed-profile.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedProfileInput } from './user-create-without-feed-profile.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFeedProfileInput {

    @Field(() => UserUpdateWithoutFeedProfileInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedProfileInput)
    update!: UserUpdateWithoutFeedProfileInput;

    @Field(() => UserCreateWithoutFeedProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedProfileInput)
    create!: UserCreateWithoutFeedProfileInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
