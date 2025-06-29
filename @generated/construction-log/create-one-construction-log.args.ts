import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogCreateInput } from './construction-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneConstructionLogArgs {

    @Field(() => ConstructionLogCreateInput, {nullable:false})
    @Type(() => ConstructionLogCreateInput)
    data!: ConstructionLogCreateInput;
}
