import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateInput } from './defined-academy-module-create.input';
import { DefinedAcademyModuleUpdateInput } from './defined-academy-module-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyModuleArgs {

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyModuleCreateInput, {nullable:false})
    @Type(() => DefinedAcademyModuleCreateInput)
    create!: DefinedAcademyModuleCreateInput;

    @Field(() => DefinedAcademyModuleUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyModuleUpdateInput)
    update!: DefinedAcademyModuleUpdateInput;
}
