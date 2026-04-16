import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateInput } from './defined-project-create.input';
import { DefinedProjectUpdateInput } from './defined-project-update.input';

@ArgsType()
export class UpsertOneDefinedProjectArgs {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateInput, {nullable:false})
    @Type(() => DefinedProjectCreateInput)
    create!: DefinedProjectCreateInput;

    @Field(() => DefinedProjectUpdateInput, {nullable:false})
    @Type(() => DefinedProjectUpdateInput)
    update!: DefinedProjectUpdateInput;
}
