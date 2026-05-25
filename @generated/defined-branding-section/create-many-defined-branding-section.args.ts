import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionCreateManyInput } from './defined-branding-section-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedBrandingSectionArgs {

    @Field(() => [DefinedBrandingSectionCreateManyInput], {nullable:false})
    @Type(() => DefinedBrandingSectionCreateManyInput)
    data!: Array<DefinedBrandingSectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
