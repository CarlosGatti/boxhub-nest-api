import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PillarWhereInput } from './pillar-where.input';
import { Type } from 'class-transformer';
import { PillarUpdateWithoutProcessesInput } from './pillar-update-without-processes.input';

@InputType()
export class PillarUpdateToOneWithWhereWithoutProcessesInput {

    @Field(() => PillarWhereInput, {nullable:true})
    @Type(() => PillarWhereInput)
    where?: PillarWhereInput;

    @Field(() => PillarUpdateWithoutProcessesInput, {nullable:false})
    @Type(() => PillarUpdateWithoutProcessesInput)
    data!: PillarUpdateWithoutProcessesInput;
}
