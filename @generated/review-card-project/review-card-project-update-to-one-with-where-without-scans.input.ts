import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectUpdateWithoutScansInput } from './review-card-project-update-without-scans.input';

@InputType()
export class ReviewCardProjectUpdateToOneWithWhereWithoutScansInput {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectUpdateWithoutScansInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutScansInput)
    data!: ReviewCardProjectUpdateWithoutScansInput;
}
