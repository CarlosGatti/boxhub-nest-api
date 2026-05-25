import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateManyInput } from './defined-branding-project-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedBrandingProjectArgs {

    @Field(() => [DefinedBrandingProjectCreateManyInput], {nullable:false})
    @Type(() => DefinedBrandingProjectCreateManyInput)
    data!: Array<DefinedBrandingProjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
