import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardExportWhereInput } from './review-card-export-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewCardExportArgs {

    @Field(() => ReviewCardExportWhereInput, {nullable:true})
    @Type(() => ReviewCardExportWhereInput)
    where?: ReviewCardExportWhereInput;
}
