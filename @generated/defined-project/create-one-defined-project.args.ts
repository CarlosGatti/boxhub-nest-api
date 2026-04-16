import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectCreateInput } from './defined-project-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedProjectArgs {

    @Field(() => DefinedProjectCreateInput, {nullable:false})
    @Type(() => DefinedProjectCreateInput)
    data!: DefinedProjectCreateInput;
}
