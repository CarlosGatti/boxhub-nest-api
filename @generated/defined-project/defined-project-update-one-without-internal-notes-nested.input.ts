import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutInternalNotesInput } from './defined-project-create-without-internal-notes.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutInternalNotesInput } from './defined-project-create-or-connect-without-internal-notes.input';
import { DefinedProjectUpsertWithoutInternalNotesInput } from './defined-project-upsert-without-internal-notes.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateToOneWithWhereWithoutInternalNotesInput } from './defined-project-update-to-one-with-where-without-internal-notes.input';

@InputType()
export class DefinedProjectUpdateOneWithoutInternalNotesNestedInput {

    @Field(() => DefinedProjectCreateWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutInternalNotesInput)
    create?: DefinedProjectCreateWithoutInternalNotesInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutInternalNotesInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutInternalNotesInput;

    @Field(() => DefinedProjectUpsertWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedProjectUpsertWithoutInternalNotesInput)
    upsert?: DefinedProjectUpsertWithoutInternalNotesInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    disconnect?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    delete?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateToOneWithWhereWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedProjectUpdateToOneWithWhereWithoutInternalNotesInput)
    update?: DefinedProjectUpdateToOneWithWhereWithoutInternalNotesInput;
}
