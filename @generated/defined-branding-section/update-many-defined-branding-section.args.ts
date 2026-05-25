import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionUpdateManyMutationInput } from './defined-branding-section-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionWhereInput } from './defined-branding-section-where.input';

@ArgsType()
export class UpdateManyDefinedBrandingSectionArgs {

    @Field(() => DefinedBrandingSectionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedBrandingSectionUpdateManyMutationInput)
    data!: DefinedBrandingSectionUpdateManyMutationInput;

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    @Type(() => DefinedBrandingSectionWhereInput)
    where?: DefinedBrandingSectionWhereInput;
}
