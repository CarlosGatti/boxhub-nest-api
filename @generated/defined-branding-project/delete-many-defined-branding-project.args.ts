import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedBrandingProjectArgs {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;
}
