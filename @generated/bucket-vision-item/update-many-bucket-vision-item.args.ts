import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemUpdateManyMutationInput } from './bucket-vision-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketVisionItemWhereInput } from './bucket-vision-item-where.input';

@ArgsType()
export class UpdateManyBucketVisionItemArgs {

    @Field(() => BucketVisionItemUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionItemUpdateManyMutationInput)
    data!: BucketVisionItemUpdateManyMutationInput;

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    @Type(() => BucketVisionItemWhereInput)
    where?: BucketVisionItemWhereInput;
}
