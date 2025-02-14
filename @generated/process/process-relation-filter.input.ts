import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessWhereInput } from './process-where.input';

@InputType()
export class ProcessRelationFilter {

    @Field(() => ProcessWhereInput, {nullable:true})
    is?: ProcessWhereInput;

    @Field(() => ProcessWhereInput, {nullable:true})
    isNot?: ProcessWhereInput;
}
