import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateInput } from './defined-branding-project-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedBrandingProjectArgs {

    @Field(() => DefinedBrandingProjectCreateInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateInput)
    data!: DefinedBrandingProjectCreateInput;
}
