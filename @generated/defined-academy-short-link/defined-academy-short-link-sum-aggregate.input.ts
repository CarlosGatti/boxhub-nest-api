import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyShortLinkSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    academyId?: true;

    @Field(() => Boolean, {nullable:true})
    resourceId?: true;

    @Field(() => Boolean, {nullable:true})
    courseId?: true;

    @Field(() => Boolean, {nullable:true})
    partnerId?: true;

    @Field(() => Boolean, {nullable:true})
    referralCampaignId?: true;

    @Field(() => Boolean, {nullable:true})
    visitCount?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;
}
