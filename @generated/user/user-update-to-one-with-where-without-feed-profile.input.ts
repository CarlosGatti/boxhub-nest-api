import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFeedProfileInput } from './user-update-without-feed-profile.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFeedProfileInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFeedProfileInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedProfileInput)
    data!: UserUpdateWithoutFeedProfileInput;
}
