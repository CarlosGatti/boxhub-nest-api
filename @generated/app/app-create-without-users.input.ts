import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateNestedManyWithoutTargetAppInput } from '../feedback/feedback-create-nested-many-without-target-app.input';

@InputType()
export class AppCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedbackCreateNestedManyWithoutTargetAppInput, {nullable:true})
    feedbacks?: FeedbackCreateNestedManyWithoutTargetAppInput;
}
