import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PillarCreateInput } from './pillar-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePillarArgs {

    @Field(() => PillarCreateInput, {nullable:false})
    @Type(() => PillarCreateInput)
    data!: PillarCreateInput;
}
