import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportCreateManyProjectInput } from './review-card-export-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardExportCreateManyProjectInputEnvelope {

    @Field(() => [ReviewCardExportCreateManyProjectInput], {nullable:false})
    @Type(() => ReviewCardExportCreateManyProjectInput)
    data!: Array<ReviewCardExportCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
