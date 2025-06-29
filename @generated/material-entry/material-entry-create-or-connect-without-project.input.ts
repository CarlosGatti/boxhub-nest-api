import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';

@InputType()
export class MaterialEntryCreateOrConnectWithoutProjectInput {

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:false})
    @Type(() => MaterialEntryWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => MaterialEntryCreateWithoutProjectInput, {nullable:false})
    @Type(() => MaterialEntryCreateWithoutProjectInput)
    create!: MaterialEntryCreateWithoutProjectInput;
}
