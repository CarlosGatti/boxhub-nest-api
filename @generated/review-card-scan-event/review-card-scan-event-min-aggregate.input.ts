import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewCardScanEventMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    ipHash?: true;

    @Field(() => Boolean, {nullable:true})
    userAgent?: true;

    @Field(() => Boolean, {nullable:true})
    referer?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
