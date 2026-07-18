import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyLessonProgressAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    enrollmentId?: true;

    @Field(() => Boolean, {nullable:true})
    lessonId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    progressPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    lastPositionSeconds?: true;
}
