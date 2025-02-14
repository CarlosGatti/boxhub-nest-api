import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEventMemberInput } from './user-update-without-event-member.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventMemberInput } from './user-create-without-event-member.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutEventMemberInput {

    @Field(() => UserUpdateWithoutEventMemberInput, {nullable:false})
    @Type(() => UserUpdateWithoutEventMemberInput)
    update!: UserUpdateWithoutEventMemberInput;

    @Field(() => UserCreateWithoutEventMemberInput, {nullable:false})
    @Type(() => UserCreateWithoutEventMemberInput)
    create!: UserCreateWithoutEventMemberInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
