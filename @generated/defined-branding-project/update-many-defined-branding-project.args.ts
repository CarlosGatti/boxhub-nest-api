import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectUpdateManyMutationInput } from './defined-branding-project-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';

@ArgsType()
export class UpdateManyDefinedBrandingProjectArgs {

    @Field(() => DefinedBrandingProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateManyMutationInput)
    data!: DefinedBrandingProjectUpdateManyMutationInput;

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;
}
