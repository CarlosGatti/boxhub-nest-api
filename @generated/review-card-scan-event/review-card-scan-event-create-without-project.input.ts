import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewCardScanEventCreateWithoutProjectInput {

    @Field(() => String, {nullable:true})
    ipHash?: string;

    @Field(() => String, {nullable:true})
    userAgent?: string;

    @Field(() => String, {nullable:true})
    referer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
