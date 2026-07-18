import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleCreateInput } from './defined-academy-module-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyModuleArgs {

    @Field(() => DefinedAcademyModuleCreateInput, {nullable:false})
    @Type(() => DefinedAcademyModuleCreateInput)
    data!: DefinedAcademyModuleCreateInput;
}
