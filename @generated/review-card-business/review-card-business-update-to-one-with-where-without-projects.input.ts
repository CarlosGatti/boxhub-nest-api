import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessUpdateWithoutProjectsInput } from './review-card-business-update-without-projects.input';

@InputType()
export class ReviewCardBusinessUpdateToOneWithWhereWithoutProjectsInput {

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereInput)
    where?: ReviewCardBusinessWhereInput;

    @Field(() => ReviewCardBusinessUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardBusinessUpdateWithoutProjectsInput)
    data!: ReviewCardBusinessUpdateWithoutProjectsInput;
}
