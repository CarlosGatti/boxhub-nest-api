import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBucketGoalsInput } from './user-update-without-bucket-goals.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBucketGoalsInput } from './user-create-without-bucket-goals.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBucketGoalsInput {

    @Field(() => UserUpdateWithoutBucketGoalsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBucketGoalsInput)
    update!: UserUpdateWithoutBucketGoalsInput;

    @Field(() => UserCreateWithoutBucketGoalsInput, {nullable:false})
    @Type(() => UserCreateWithoutBucketGoalsInput)
    create!: UserCreateWithoutBucketGoalsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
