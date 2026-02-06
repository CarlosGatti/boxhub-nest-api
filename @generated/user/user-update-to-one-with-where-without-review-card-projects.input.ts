import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReviewCardProjectsInput } from './user-update-without-review-card-projects.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReviewCardProjectsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReviewCardProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewCardProjectsInput)
    data!: UserUpdateWithoutReviewCardProjectsInput;
}
