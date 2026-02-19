import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemCreateInput } from './bucket-vision-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketVisionItemArgs {

    @Field(() => BucketVisionItemCreateInput, {nullable:false})
    @Type(() => BucketVisionItemCreateInput)
    data!: BucketVisionItemCreateInput;
}
