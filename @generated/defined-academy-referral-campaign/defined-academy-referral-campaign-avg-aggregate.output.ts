import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyReferralCampaignAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    academyId?: number;

    @Field(() => Float, {nullable:true})
    partnerId?: number;

    @Field(() => Float, {nullable:true})
    courseId?: number;

    @Field(() => Float, {nullable:true})
    resourceId?: number;
}
