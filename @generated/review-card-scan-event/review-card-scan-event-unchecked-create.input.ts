import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ReviewCardScanEventUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:true})
    ipHash?: string;

    @Field(() => String, {nullable:true})
    userAgent?: string;

    @Field(() => String, {nullable:true})
    referer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
