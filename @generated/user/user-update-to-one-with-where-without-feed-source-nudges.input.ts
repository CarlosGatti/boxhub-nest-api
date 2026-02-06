import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFeedSourceNudgesInput } from './user-update-without-feed-source-nudges.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFeedSourceNudgesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFeedSourceNudgesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedSourceNudgesInput)
    data!: UserUpdateWithoutFeedSourceNudgesInput;
}
