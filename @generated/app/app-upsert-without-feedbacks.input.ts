import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutFeedbacksInput } from './app-update-without-feedbacks.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutFeedbacksInput } from './app-create-without-feedbacks.input';
import { AppWhereInput } from './app-where.input';

@InputType()
export class AppUpsertWithoutFeedbacksInput {

    @Field(() => AppUpdateWithoutFeedbacksInput, {nullable:false})
    @Type(() => AppUpdateWithoutFeedbacksInput)
    update!: AppUpdateWithoutFeedbacksInput;

    @Field(() => AppCreateWithoutFeedbacksInput, {nullable:false})
    @Type(() => AppCreateWithoutFeedbacksInput)
    create!: AppCreateWithoutFeedbacksInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;
}
