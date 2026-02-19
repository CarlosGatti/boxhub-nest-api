import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBucketVisionItemArgs {

    @Field(() => BucketVisionItemWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionItemWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>;
}
