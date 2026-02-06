import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectUpdateWithoutScansInput } from './review-card-project-update-without-scans.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutScansInput } from './review-card-project-create-without-scans.input';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';

@InputType()
export class ReviewCardProjectUpsertWithoutScansInput {

    @Field(() => ReviewCardProjectUpdateWithoutScansInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutScansInput)
    update!: ReviewCardProjectUpdateWithoutScansInput;

    @Field(() => ReviewCardProjectCreateWithoutScansInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutScansInput)
    create!: ReviewCardProjectCreateWithoutScansInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;
}
