import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyLessonMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    moduleId?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    summary?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    lessonType?: true;

    @Field(() => Boolean, {nullable:true})
    videoUrl?: true;

    @Field(() => Boolean, {nullable:true})
    videoProvider?: true;

    @Field(() => Boolean, {nullable:true})
    videoDurationSeconds?: true;

    @Field(() => Boolean, {nullable:true})
    bodyContent?: true;

    @Field(() => Boolean, {nullable:true})
    sortOrder?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    visibility?: true;

    @Field(() => Boolean, {nullable:true})
    isPreview?: true;

    @Field(() => Boolean, {nullable:true})
    publishedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
