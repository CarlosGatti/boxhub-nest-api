import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionSectionWhereUniqueInput } from './bucket-vision-section-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionCreateInput } from './bucket-vision-section-create.input';
import { BucketVisionSectionUpdateInput } from './bucket-vision-section-update.input';

@ArgsType()
export class UpsertOneBucketVisionSectionArgs {

    @Field(() => BucketVisionSectionWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>;

    @Field(() => BucketVisionSectionCreateInput, {nullable:false})
    @Type(() => BucketVisionSectionCreateInput)
    create!: BucketVisionSectionCreateInput;

    @Field(() => BucketVisionSectionUpdateInput, {nullable:false})
    @Type(() => BucketVisionSectionUpdateInput)
    update!: BucketVisionSectionUpdateInput;
}
