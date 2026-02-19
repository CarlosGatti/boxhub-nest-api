import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketVisionBoardCreateNestedOneWithoutCheckinsInput } from '../bucket-vision-board/bucket-vision-board-create-nested-one-without-checkins.input';

@InputType()
export class BucketVisionCheckinCreateInput {

    @Field(() => String, {nullable:true})
    kind?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    mood?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    snapshot?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => BucketVisionBoardCreateNestedOneWithoutCheckinsInput, {nullable:false})
    board!: BucketVisionBoardCreateNestedOneWithoutCheckinsInput;
}
