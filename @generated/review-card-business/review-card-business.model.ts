import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { ReviewCardProject } from '../review-card-project/review-card-project.model';
import { ReviewCardBusinessCount } from './review-card-business-count.output';

@ObjectType()
export class ReviewCardBusiness {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    placeId!: string | null;

    @Field(() => String, {nullable:true})
    googleReviewUrl!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [ReviewCardProject], {nullable:true})
    projects?: Array<ReviewCardProject>;

    @Field(() => ReviewCardBusinessCount, {nullable:false})
    _count?: ReviewCardBusinessCount;
}
