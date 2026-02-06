import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardExportCreateInput } from './review-card-export-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCardExportArgs {

    @Field(() => ReviewCardExportCreateInput, {nullable:false})
    @Type(() => ReviewCardExportCreateInput)
    data!: ReviewCardExportCreateInput;
}
