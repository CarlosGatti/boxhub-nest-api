import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PillarUpdateWithoutProcessesInput } from './pillar-update-without-processes.input';
import { Type } from 'class-transformer';
import { PillarCreateWithoutProcessesInput } from './pillar-create-without-processes.input';
import { PillarWhereInput } from './pillar-where.input';

@InputType()
export class PillarUpsertWithoutProcessesInput {

    @Field(() => PillarUpdateWithoutProcessesInput, {nullable:false})
    @Type(() => PillarUpdateWithoutProcessesInput)
    update!: PillarUpdateWithoutProcessesInput;

    @Field(() => PillarCreateWithoutProcessesInput, {nullable:false})
    @Type(() => PillarCreateWithoutProcessesInput)
    create!: PillarCreateWithoutProcessesInput;

    @Field(() => PillarWhereInput, {nullable:true})
    @Type(() => PillarWhereInput)
    where?: PillarWhereInput;
}
