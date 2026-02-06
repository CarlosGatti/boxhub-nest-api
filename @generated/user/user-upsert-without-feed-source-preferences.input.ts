import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFeedSourcePreferencesInput } from './user-update-without-feed-source-preferences.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedSourcePreferencesInput } from './user-create-without-feed-source-preferences.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFeedSourcePreferencesInput {

    @Field(() => UserUpdateWithoutFeedSourcePreferencesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedSourcePreferencesInput)
    update!: UserUpdateWithoutFeedSourcePreferencesInput;

    @Field(() => UserCreateWithoutFeedSourcePreferencesInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedSourcePreferencesInput)
    create!: UserCreateWithoutFeedSourcePreferencesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
