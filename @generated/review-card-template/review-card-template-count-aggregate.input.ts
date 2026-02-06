import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewCardTemplateCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    key?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    category?: true;

    @Field(() => Boolean, {nullable:true})
    aspect?: true;

    @Field(() => Boolean, {nullable:true})
    schemaVersion?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    previewImageUrl?: true;

    @Field(() => Boolean, {nullable:true})
    defaultDesignJson?: true;

    @Field(() => Boolean, {nullable:true})
    editableFieldsJson?: true;

    @Field(() => Boolean, {nullable:true})
    constraintsJson?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
