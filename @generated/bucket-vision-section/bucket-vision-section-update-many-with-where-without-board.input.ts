import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionScalarWhereInput } from './bucket-vision-section-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionUpdateManyMutationInput } from './bucket-vision-section-update-many-mutation.input';

@InputType()
export class BucketVisionSectionUpdateManyWithWhereWithoutBoardInput {

    @Field(() => BucketVisionSectionScalarWhereInput, {nullable:false})
    @Type(() => BucketVisionSectionScalarWhereInput)
    where!: BucketVisionSectionScalarWhereInput;

    @Field(() => BucketVisionSectionUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionSectionUpdateManyMutationInput)
    data!: BucketVisionSectionUpdateManyMutationInput;
}
