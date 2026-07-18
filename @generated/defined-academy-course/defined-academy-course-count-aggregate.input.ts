import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyCourseCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    academyId?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    summary?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    coverImageUrl?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    visibility?: true;

    @Field(() => Boolean, {nullable:true})
    level?: true;

    @Field(() => Boolean, {nullable:true})
    estimatedDurationMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    sortOrder?: true;

    @Field(() => Boolean, {nullable:true})
    publishedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
