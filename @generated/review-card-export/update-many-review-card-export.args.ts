import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardExportUpdateManyMutationInput } from './review-card-export-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCardExportWhereInput } from './review-card-export-where.input';

@ArgsType()
export class UpdateManyReviewCardExportArgs {

    @Field(() => ReviewCardExportUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardExportUpdateManyMutationInput)
    data!: ReviewCardExportUpdateManyMutationInput;

    @Field(() => ReviewCardExportWhereInput, {nullable:true})
    @Type(() => ReviewCardExportWhereInput)
    where?: ReviewCardExportWhereInput;
}
