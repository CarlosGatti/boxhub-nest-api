import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionCreateInput } from './defined-branding-section-create.input';
import { DefinedBrandingSectionUpdateInput } from './defined-branding-section-update.input';

@ArgsType()
export class UpsertOneDefinedBrandingSectionArgs {

    @Field(() => DefinedBrandingSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>;

    @Field(() => DefinedBrandingSectionCreateInput, {nullable:false})
    @Type(() => DefinedBrandingSectionCreateInput)
    create!: DefinedBrandingSectionCreateInput;

    @Field(() => DefinedBrandingSectionUpdateInput, {nullable:false})
    @Type(() => DefinedBrandingSectionUpdateInput)
    update!: DefinedBrandingSectionUpdateInput;
}
