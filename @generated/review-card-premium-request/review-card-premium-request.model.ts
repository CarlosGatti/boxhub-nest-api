import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from '../prisma/review-card-premium-request-status.enum';
import { User } from '../user/user.model';
import { ReviewCardProject } from '../review-card-project/review-card-project.model';

@ObjectType()
export class ReviewCardPremiumRequest {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => String, {nullable:false})
    notes!: string;

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:false,defaultValue:'OPEN'})
    status!: keyof typeof ReviewCardPremiumRequestStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ReviewCardProject, {nullable:true})
    project?: ReviewCardProject | null;
}
