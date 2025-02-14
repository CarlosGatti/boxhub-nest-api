import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PillarWhereInput } from './pillar-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPillarArgs {

    @Field(() => PillarWhereInput, {nullable:true})
    @Type(() => PillarWhereInput)
    where?: PillarWhereInput;
}
