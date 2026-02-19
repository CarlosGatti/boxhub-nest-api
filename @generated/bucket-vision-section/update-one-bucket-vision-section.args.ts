import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionSectionUpdateInput } from './bucket-vision-section-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketVisionSectionWhereUniqueInput } from './bucket-vision-section-where-unique.input';

@ArgsType()
export class UpdateOneBucketVisionSectionArgs {

    @Field(() => BucketVisionSectionUpdateInput, {nullable:false})
    @Type(() => BucketVisionSectionUpdateInput)
    data!: BucketVisionSectionUpdateInput;

    @Field(() => BucketVisionSectionWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>;
}
