import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventOnlineDetailCreateWithoutEventInput {

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => String, {nullable:true})
    joinCode?: string;

    @Field(() => String, {nullable:true})
    joinDetails?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
