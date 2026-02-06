import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectUpdateWithoutExportsInput } from './review-card-project-update-without-exports.input';

@InputType()
export class ReviewCardProjectUpdateToOneWithWhereWithoutExportsInput {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectUpdateWithoutExportsInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutExportsInput)
    data!: ReviewCardProjectUpdateWithoutExportsInput;
}
