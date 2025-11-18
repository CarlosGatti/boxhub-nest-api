import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscartItemCreateManyInput } from './discart-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDiscartItemArgs {

    @Field(() => [DiscartItemCreateManyInput], {nullable:false})
    @Type(() => DiscartItemCreateManyInput)
    data!: Array<DiscartItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
