import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBucketGoalsInput } from './user-update-without-bucket-goals.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBucketGoalsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBucketGoalsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBucketGoalsInput)
    data!: UserUpdateWithoutBucketGoalsInput;
}
