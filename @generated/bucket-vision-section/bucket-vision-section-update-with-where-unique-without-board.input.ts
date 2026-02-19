import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionSectionWhereUniqueInput } from './bucket-vision-section-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionUpdateWithoutBoardInput } from './bucket-vision-section-update-without-board.input';

@InputType()
export class BucketVisionSectionUpdateWithWhereUniqueWithoutBoardInput {

    @Field(() => BucketVisionSectionWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>;

    @Field(() => BucketVisionSectionUpdateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionSectionUpdateWithoutBoardInput)
    data!: BucketVisionSectionUpdateWithoutBoardInput;
}
