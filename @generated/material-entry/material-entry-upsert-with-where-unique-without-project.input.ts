import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialEntryUpdateWithoutProjectInput } from './material-entry-update-without-project.input';
import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';

@InputType()
export class MaterialEntryUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:false})
    @Type(() => MaterialEntryWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => MaterialEntryUpdateWithoutProjectInput, {nullable:false})
    @Type(() => MaterialEntryUpdateWithoutProjectInput)
    update!: MaterialEntryUpdateWithoutProjectInput;

    @Field(() => MaterialEntryCreateWithoutProjectInput, {nullable:false})
    @Type(() => MaterialEntryCreateWithoutProjectInput)
    create!: MaterialEntryCreateWithoutProjectInput;
}
