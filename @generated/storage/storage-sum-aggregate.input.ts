import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StorageSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
