import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectUpdateWithoutExportsInput } from './review-card-project-update-without-exports.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutExportsInput } from './review-card-project-create-without-exports.input';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';

@InputType()
export class ReviewCardProjectUpsertWithoutExportsInput {

    @Field(() => ReviewCardProjectUpdateWithoutExportsInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutExportsInput)
    update!: ReviewCardProjectUpdateWithoutExportsInput;

    @Field(() => ReviewCardProjectCreateWithoutExportsInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutExportsInput)
    create!: ReviewCardProjectCreateWithoutExportsInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;
}
