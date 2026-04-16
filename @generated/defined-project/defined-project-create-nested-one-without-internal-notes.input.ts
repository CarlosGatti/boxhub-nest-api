import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutInternalNotesInput } from './defined-project-create-without-internal-notes.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutInternalNotesInput } from './defined-project-create-or-connect-without-internal-notes.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectCreateNestedOneWithoutInternalNotesInput {

    @Field(() => DefinedProjectCreateWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutInternalNotesInput)
    create?: DefinedProjectCreateWithoutInternalNotesInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutInternalNotesInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutInternalNotesInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
