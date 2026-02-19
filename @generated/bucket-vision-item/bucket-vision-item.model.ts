import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemType } from '../prisma/bucket-vision-item-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketVisionBoard } from '../bucket-vision-board/bucket-vision-board.model';

@ObjectType()
export class BucketVisionItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => BucketVisionItemType, {nullable:false})
    type!: keyof typeof BucketVisionItemType;

    @Field(() => String, {nullable:true})
    text!: string | null;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    order!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    layout!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => BucketVisionBoard, {nullable:false})
    board?: BucketVisionBoard;
}
