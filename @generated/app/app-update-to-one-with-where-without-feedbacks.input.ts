import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { Type } from 'class-transformer';
import { AppUpdateWithoutFeedbacksInput } from './app-update-without-feedbacks.input';

@InputType()
export class AppUpdateToOneWithWhereWithoutFeedbacksInput {

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;

    @Field(() => AppUpdateWithoutFeedbacksInput, {nullable:false})
    @Type(() => AppUpdateWithoutFeedbacksInput)
    data!: AppUpdateWithoutFeedbacksInput;
}
