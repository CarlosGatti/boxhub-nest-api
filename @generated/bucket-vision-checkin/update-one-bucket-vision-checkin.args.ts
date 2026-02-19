import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinUpdateInput } from './bucket-vision-checkin-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketVisionCheckinWhereUniqueInput } from './bucket-vision-checkin-where-unique.input';

@ArgsType()
export class UpdateOneBucketVisionCheckinArgs {

    @Field(() => BucketVisionCheckinUpdateInput, {nullable:false})
    @Type(() => BucketVisionCheckinUpdateInput)
    data!: BucketVisionCheckinUpdateInput;

    @Field(() => BucketVisionCheckinWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>;
}
