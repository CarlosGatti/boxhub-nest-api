import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HoldingCreateManyInput } from './holding-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHoldingArgs {

    @Field(() => [HoldingCreateManyInput], {nullable:false})
    @Type(() => HoldingCreateManyInput)
    data!: Array<HoldingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
