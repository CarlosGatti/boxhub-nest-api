import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionWhereInput } from './defined-branding-section-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedBrandingSectionArgs {

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    @Type(() => DefinedBrandingSectionWhereInput)
    where?: DefinedBrandingSectionWhereInput;
}
