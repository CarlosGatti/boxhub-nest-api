import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ReviewCardTemplateUncheckedCreateWithoutProjectsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    aspect!: string;

    @Field(() => Int, {nullable:false})
    schemaVersion!: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => String, {nullable:true})
    previewImageUrl?: string;

    @Field(() => GraphQLJSON, {nullable:false})
    defaultDesignJson!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    editableFieldsJson!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    constraintsJson!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
