import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProcessCreateInput } from './process-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProcessArgs {

    @Field(() => ProcessCreateInput, {nullable:false})
    @Type(() => ProcessCreateInput)
    data!: ProcessCreateInput;
}
