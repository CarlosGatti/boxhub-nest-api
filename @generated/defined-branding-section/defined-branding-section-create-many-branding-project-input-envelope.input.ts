import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionCreateManyBrandingProjectInput } from './defined-branding-section-create-many-branding-project.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope {

    @Field(() => [DefinedBrandingSectionCreateManyBrandingProjectInput], {nullable:false})
    @Type(() => DefinedBrandingSectionCreateManyBrandingProjectInput)
    data!: Array<DefinedBrandingSectionCreateManyBrandingProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
