import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyLessonAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    moduleId?: true;

    @Field(() => Boolean, {nullable:true})
    videoDurationSeconds?: true;

    @Field(() => Boolean, {nullable:true})
    sortOrder?: true;
}
