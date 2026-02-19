import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemUpdateInput } from './bucket-vision-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';

@ArgsType()
export class UpdateOneBucketVisionItemArgs {

    @Field(() => BucketVisionItemUpdateInput, {nullable:false})
    @Type(() => BucketVisionItemUpdateInput)
    data!: BucketVisionItemUpdateInput;

    @Field(() => BucketVisionItemWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionItemWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>;
}
