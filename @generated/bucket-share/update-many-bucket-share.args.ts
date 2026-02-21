import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketShareUpdateManyMutationInput } from './bucket-share-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketShareWhereInput } from './bucket-share-where.input';

@ArgsType()
export class UpdateManyBucketShareArgs {

    @Field(() => BucketShareUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketShareUpdateManyMutationInput)
    data!: BucketShareUpdateManyMutationInput;

    @Field(() => BucketShareWhereInput, {nullable:true})
    @Type(() => BucketShareWhereInput)
    where?: BucketShareWhereInput;
}
