import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscartItemCreateInput } from './discart-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDiscartItemArgs {

    @Field(() => DiscartItemCreateInput, {nullable:false})
    @Type(() => DiscartItemCreateInput)
    data!: DiscartItemCreateInput;
}
