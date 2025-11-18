import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscartItemWhereInput } from './discart-item-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDiscartItemArgs {

    @Field(() => DiscartItemWhereInput, {nullable:true})
    @Type(() => DiscartItemWhereInput)
    where?: DiscartItemWhereInput;
}
