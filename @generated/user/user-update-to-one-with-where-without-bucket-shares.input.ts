import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBucketSharesInput } from './user-update-without-bucket-shares.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBucketSharesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBucketSharesInput, {nullable:false})
    @Type(() => UserUpdateWithoutBucketSharesInput)
    data!: UserUpdateWithoutBucketSharesInput;
}
