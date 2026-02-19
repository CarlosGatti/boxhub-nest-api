import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardCreateManyInput } from './bucket-vision-board-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketVisionBoardArgs {

    @Field(() => [BucketVisionBoardCreateManyInput], {nullable:false})
    @Type(() => BucketVisionBoardCreateManyInput)
    data!: Array<BucketVisionBoardCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
