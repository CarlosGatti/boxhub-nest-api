import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionCreateInput } from './defined-branding-section-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedBrandingSectionArgs {

    @Field(() => DefinedBrandingSectionCreateInput, {nullable:false})
    @Type(() => DefinedBrandingSectionCreateInput)
    data!: DefinedBrandingSectionCreateInput;
}
