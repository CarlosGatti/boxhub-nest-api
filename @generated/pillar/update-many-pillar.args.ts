import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PillarUpdateManyMutationInput } from './pillar-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PillarWhereInput } from './pillar-where.input';

@ArgsType()
export class UpdateManyPillarArgs {

    @Field(() => PillarUpdateManyMutationInput, {nullable:false})
    @Type(() => PillarUpdateManyMutationInput)
    data!: PillarUpdateManyMutationInput;

    @Field(() => PillarWhereInput, {nullable:true})
    @Type(() => PillarWhereInput)
    where?: PillarWhereInput;
}
