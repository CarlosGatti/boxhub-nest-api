import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { ConstructionLogUncheckedCreateNestedManyWithoutProjectInput } from '../construction-log/construction-log-unchecked-create-nested-many-without-project.input';
import { ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput } from '../project-document/project-document-unchecked-create-nested-many-without-project.input';
import { MaterialEntryUncheckedCreateNestedManyWithoutProjectInput } from '../material-entry/material-entry-unchecked-create-nested-many-without-project.input';
import { ProjectPhotoUncheckedCreateNestedManyWithoutProjectInput } from '../project-photo/project-photo-unchecked-create-nested-many-without-project.input';

@InputType()
export class ProjectUncheckedCreateWithoutPermitsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    client!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => ProjectStatus, {nullable:true})
    status?: keyof typeof ProjectStatus;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Int, {nullable:false})
    responsibleId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ConstructionLogUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    logs?: ConstructionLogUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => MaterialEntryUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    materials?: MaterialEntryUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => ProjectPhotoUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    photos?: ProjectPhotoUncheckedCreateNestedManyWithoutProjectInput;
}
