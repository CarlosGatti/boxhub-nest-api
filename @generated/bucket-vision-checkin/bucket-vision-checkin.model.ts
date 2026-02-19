import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketVisionBoard } from '../bucket-vision-board/bucket-vision-board.model';

@ObjectType()
export class BucketVisionCheckin {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => String, {nullable:true})
    kind!: string | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    mood!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    snapshot!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => BucketVisionBoard, {nullable:false})
    board?: BucketVisionBoard;
}
