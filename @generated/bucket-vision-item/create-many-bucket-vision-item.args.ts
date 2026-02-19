import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemCreateManyInput } from './bucket-vision-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketVisionItemArgs {

    @Field(() => [BucketVisionItemCreateManyInput], {nullable:false})
    @Type(() => BucketVisionItemCreateManyInput)
    data!: Array<BucketVisionItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
