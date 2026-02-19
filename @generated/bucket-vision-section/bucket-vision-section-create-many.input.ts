import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionSectionType } from '../prisma/bucket-vision-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class BucketVisionSectionCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => BucketVisionSectionType, {nullable:false})
    type!: keyof typeof BucketVisionSectionType;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
