import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionCheckinWhereUniqueInput } from './bucket-vision-checkin-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinCreateInput } from './bucket-vision-checkin-create.input';
import { BucketVisionCheckinUpdateInput } from './bucket-vision-checkin-update.input';

@ArgsType()
export class UpsertOneBucketVisionCheckinArgs {

    @Field(() => BucketVisionCheckinWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>;

    @Field(() => BucketVisionCheckinCreateInput, {nullable:false})
    @Type(() => BucketVisionCheckinCreateInput)
    create!: BucketVisionCheckinCreateInput;

    @Field(() => BucketVisionCheckinUpdateInput, {nullable:false})
    @Type(() => BucketVisionCheckinUpdateInput)
    update!: BucketVisionCheckinUpdateInput;
}
