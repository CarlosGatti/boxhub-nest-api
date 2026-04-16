import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedClientCreateInput } from './defined-client-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedClientArgs {

    @Field(() => DefinedClientCreateInput, {nullable:false})
    @Type(() => DefinedClientCreateInput)
    data!: DefinedClientCreateInput;
}
