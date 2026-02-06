import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFeedSourcePreferencesInput } from './user-update-without-feed-source-preferences.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFeedSourcePreferencesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFeedSourcePreferencesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedSourcePreferencesInput)
    data!: UserUpdateWithoutFeedSourcePreferencesInput;
}
