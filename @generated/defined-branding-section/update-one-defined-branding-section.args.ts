import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionUpdateInput } from './defined-branding-section-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';

@ArgsType()
export class UpdateOneDefinedBrandingSectionArgs {

    @Field(() => DefinedBrandingSectionUpdateInput, {nullable:false})
    @Type(() => DefinedBrandingSectionUpdateInput)
    data!: DefinedBrandingSectionUpdateInput;

    @Field(() => DefinedBrandingSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>;
}
