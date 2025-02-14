import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PillarCreateManyInput } from './pillar-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPillarArgs {

    @Field(() => [PillarCreateManyInput], {nullable:false})
    @Type(() => PillarCreateManyInput)
    data!: Array<PillarCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
