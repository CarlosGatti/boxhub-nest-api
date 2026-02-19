import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionItemCreateInput } from './bucket-vision-item-create.input';
import { BucketVisionItemUpdateInput } from './bucket-vision-item-update.input';

@ArgsType()
export class UpsertOneBucketVisionItemArgs {

    @Field(() => BucketVisionItemWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionItemWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>;

    @Field(() => BucketVisionItemCreateInput, {nullable:false})
    @Type(() => BucketVisionItemCreateInput)
    create!: BucketVisionItemCreateInput;

    @Field(() => BucketVisionItemUpdateInput, {nullable:false})
    @Type(() => BucketVisionItemUpdateInput)
    update!: BucketVisionItemUpdateInput;
}
