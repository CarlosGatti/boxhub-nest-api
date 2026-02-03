import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';

@InputType()
export class AppNullableRelationFilter {

    @Field(() => AppWhereInput, {nullable:true})
    is?: AppWhereInput;

    @Field(() => AppWhereInput, {nullable:true})
    isNot?: AppWhereInput;
}
