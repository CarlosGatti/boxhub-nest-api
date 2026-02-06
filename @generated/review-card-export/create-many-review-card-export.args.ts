import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardExportCreateManyInput } from './review-card-export-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCardExportArgs {

    @Field(() => [ReviewCardExportCreateManyInput], {nullable:false})
    @Type(() => ReviewCardExportCreateManyInput)
    data!: Array<ReviewCardExportCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
