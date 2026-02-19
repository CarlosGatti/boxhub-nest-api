import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionSectionType } from '../prisma/bucket-vision-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketVisionBoard } from '../bucket-vision-board/bucket-vision-board.model';

@ObjectType()
export class BucketVisionSection {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => BucketVisionSectionType, {nullable:false})
    type!: keyof typeof BucketVisionSectionType;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    content!: any | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => BucketVisionBoard, {nullable:false})
    board?: BucketVisionBoard;
}
