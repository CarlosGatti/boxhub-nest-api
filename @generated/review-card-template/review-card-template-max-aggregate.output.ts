import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewCardTemplateMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => String, {nullable:true})
    aspect?: string;

    @Field(() => Int, {nullable:true})
    schemaVersion?: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => String, {nullable:true})
    previewImageUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
