import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketShareWhereInput } from './bucket-share-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketShareArgs {

    @Field(() => BucketShareWhereInput, {nullable:true})
    @Type(() => BucketShareWhereInput)
    where?: BucketShareWhereInput;
}
