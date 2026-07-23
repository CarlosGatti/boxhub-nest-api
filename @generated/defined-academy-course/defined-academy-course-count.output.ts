import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyCourseCount {

    @Field(() => Int, {nullable:false})
    modules?: number;

    @Field(() => Int, {nullable:false})
    enrollments?: number;

    @Field(() => Int, {nullable:false})
    shortLinks?: number;

    @Field(() => Int, {nullable:false})
    referralCampaigns?: number;

    @Field(() => Int, {nullable:false})
    careerStageLinks?: number;
}
