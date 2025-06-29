import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialEntryCreateInput } from './material-entry-create.input';
import { MaterialEntryUpdateInput } from './material-entry-update.input';

@ArgsType()
export class UpsertOneMaterialEntryArgs {

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:false})
    @Type(() => MaterialEntryWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => MaterialEntryCreateInput, {nullable:false})
    @Type(() => MaterialEntryCreateInput)
    create!: MaterialEntryCreateInput;

    @Field(() => MaterialEntryUpdateInput, {nullable:false})
    @Type(() => MaterialEntryUpdateInput)
    update!: MaterialEntryUpdateInput;
}
