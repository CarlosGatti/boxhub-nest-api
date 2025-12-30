import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingWhereInput } from './holding-where.input';
import { Type } from 'class-transformer';

@InputType()
export class HoldingListRelationFilter {

    @Field(() => HoldingWhereInput, {nullable:true})
    @Type(() => HoldingWhereInput)
    every?: HoldingWhereInput;

    @Field(() => HoldingWhereInput, {nullable:true})
    @Type(() => HoldingWhereInput)
    some?: HoldingWhereInput;

    @Field(() => HoldingWhereInput, {nullable:true})
    @Type(() => HoldingWhereInput)
    none?: HoldingWhereInput;
}
