import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryUpdateInput } from './material-entry-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';

@ArgsType()
export class UpdateOneMaterialEntryArgs {

    @Field(() => MaterialEntryUpdateInput, {nullable:false})
    @Type(() => MaterialEntryUpdateInput)
    data!: MaterialEntryUpdateInput;

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:false})
    @Type(() => MaterialEntryWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;
}
