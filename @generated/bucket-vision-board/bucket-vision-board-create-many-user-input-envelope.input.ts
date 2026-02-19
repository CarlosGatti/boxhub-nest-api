import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateManyUserInput } from './bucket-vision-board-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketVisionBoardCreateManyUserInputEnvelope {

    @Field(() => [BucketVisionBoardCreateManyUserInput], {nullable:false})
    @Type(() => BucketVisionBoardCreateManyUserInput)
    data!: Array<BucketVisionBoardCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
