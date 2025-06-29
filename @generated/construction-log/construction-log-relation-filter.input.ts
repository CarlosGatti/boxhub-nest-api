import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';

@InputType()
export class ConstructionLogRelationFilter {

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    is?: ConstructionLogWhereInput;

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    isNot?: ConstructionLogWhereInput;
}
