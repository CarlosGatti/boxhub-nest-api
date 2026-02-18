import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketMediaType } from '../prisma/bucket-media-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalLogCreateNestedOneWithoutMediaInput } from '../bucket-goal-log/bucket-goal-log-create-nested-one-without-media.input';

@InputType()
export class BucketGoalMediaCreateWithoutGoalInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => BucketMediaType, {nullable:true})
    type?: keyof typeof BucketMediaType;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BucketGoalLogCreateNestedOneWithoutMediaInput, {nullable:true})
    log?: BucketGoalLogCreateNestedOneWithoutMediaInput;
}
