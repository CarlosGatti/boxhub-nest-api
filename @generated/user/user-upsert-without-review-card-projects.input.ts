import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewCardProjectsInput } from './user-update-without-review-card-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCardProjectsInput } from './user-create-without-review-card-projects.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReviewCardProjectsInput {

    @Field(() => UserUpdateWithoutReviewCardProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewCardProjectsInput)
    update!: UserUpdateWithoutReviewCardProjectsInput;

    @Field(() => UserCreateWithoutReviewCardProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCardProjectsInput)
    create!: UserCreateWithoutReviewCardProjectsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
