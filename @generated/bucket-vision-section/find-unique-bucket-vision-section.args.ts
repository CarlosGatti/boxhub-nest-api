import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionSectionWhereUniqueInput } from './bucket-vision-section-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBucketVisionSectionArgs {

    @Field(() => BucketVisionSectionWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>;
}
