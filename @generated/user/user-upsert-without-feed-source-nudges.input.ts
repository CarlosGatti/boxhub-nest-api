import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFeedSourceNudgesInput } from './user-update-without-feed-source-nudges.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedSourceNudgesInput } from './user-create-without-feed-source-nudges.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFeedSourceNudgesInput {

    @Field(() => UserUpdateWithoutFeedSourceNudgesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedSourceNudgesInput)
    update!: UserUpdateWithoutFeedSourceNudgesInput;

    @Field(() => UserCreateWithoutFeedSourceNudgesInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedSourceNudgesInput)
    create!: UserCreateWithoutFeedSourceNudgesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
