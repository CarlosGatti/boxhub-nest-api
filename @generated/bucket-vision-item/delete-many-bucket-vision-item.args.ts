import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemWhereInput } from './bucket-vision-item-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketVisionItemArgs {

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    @Type(() => BucketVisionItemWhereInput)
    where?: BucketVisionItemWhereInput;
}
