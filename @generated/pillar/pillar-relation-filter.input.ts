import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PillarWhereInput } from './pillar-where.input';

@InputType()
export class PillarRelationFilter {

    @Field(() => PillarWhereInput, {nullable:true})
    is?: PillarWhereInput;

    @Field(() => PillarWhereInput, {nullable:true})
    isNot?: PillarWhereInput;
}
