import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportScalarWhereInput } from './review-card-export-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewCardExportUpdateManyMutationInput } from './review-card-export-update-many-mutation.input';

@InputType()
export class ReviewCardExportUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ReviewCardExportScalarWhereInput, {nullable:false})
    @Type(() => ReviewCardExportScalarWhereInput)
    where!: ReviewCardExportScalarWhereInput;

    @Field(() => ReviewCardExportUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardExportUpdateManyMutationInput)
    data!: ReviewCardExportUpdateManyMutationInput;
}
