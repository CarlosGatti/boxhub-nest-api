import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketShareCreateInput } from './bucket-share-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketShareArgs {

    @Field(() => BucketShareCreateInput, {nullable:false})
    @Type(() => BucketShareCreateInput)
    data!: BucketShareCreateInput;
}
