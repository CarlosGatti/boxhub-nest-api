import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LogMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    action?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    details?: true;

    @Field(() => Boolean, {nullable:true})
    route?: true;

    @Field(() => Boolean, {nullable:true})
    ipAddress?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
