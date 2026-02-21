import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBucketSharesInput } from './user-update-without-bucket-shares.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBucketSharesInput } from './user-create-without-bucket-shares.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBucketSharesInput {

    @Field(() => UserUpdateWithoutBucketSharesInput, {nullable:false})
    @Type(() => UserUpdateWithoutBucketSharesInput)
    update!: UserUpdateWithoutBucketSharesInput;

    @Field(() => UserCreateWithoutBucketSharesInput, {nullable:false})
    @Type(() => UserCreateWithoutBucketSharesInput)
    create!: UserCreateWithoutBucketSharesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
