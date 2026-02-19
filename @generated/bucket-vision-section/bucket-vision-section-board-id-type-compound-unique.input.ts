import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionSectionType } from '../prisma/bucket-vision-section-type.enum';

@InputType()
export class BucketVisionSectionBoardIdTypeCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => BucketVisionSectionType, {nullable:false})
    type!: keyof typeof BucketVisionSectionType;
}
