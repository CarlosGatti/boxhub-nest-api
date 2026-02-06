import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessUpdateWithoutProjectsInput } from './review-card-business-update-without-projects.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateWithoutProjectsInput } from './review-card-business-create-without-projects.input';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';

@InputType()
export class ReviewCardBusinessUpsertWithoutProjectsInput {

    @Field(() => ReviewCardBusinessUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardBusinessUpdateWithoutProjectsInput)
    update!: ReviewCardBusinessUpdateWithoutProjectsInput;

    @Field(() => ReviewCardBusinessCreateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardBusinessCreateWithoutProjectsInput)
    create!: ReviewCardBusinessCreateWithoutProjectsInput;

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereInput)
    where?: ReviewCardBusinessWhereInput;
}
