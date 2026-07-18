import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyResourceCount {

    @Field(() => Int, {nullable:false})
    shortLinks?: number;

    @Field(() => Int, {nullable:false})
    referralCampaigns?: number;
}
