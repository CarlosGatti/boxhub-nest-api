import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialEntryUpdateWithoutProjectInput } from './material-entry-update-without-project.input';

@InputType()
export class MaterialEntryUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:false})
    @Type(() => MaterialEntryWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => MaterialEntryUpdateWithoutProjectInput, {nullable:false})
    @Type(() => MaterialEntryUpdateWithoutProjectInput)
    data!: MaterialEntryUpdateWithoutProjectInput;
}
