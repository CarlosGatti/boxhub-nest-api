import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutInternalNotesInput } from './defined-project-create-without-internal-notes.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutInternalNotesInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutInternalNotesInput)
    create!: DefinedProjectCreateWithoutInternalNotesInput;
}
