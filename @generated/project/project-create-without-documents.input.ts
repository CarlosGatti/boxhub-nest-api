import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { UserCreateNestedOneWithoutProjectResponsibleInput } from '../user/user-create-nested-one-without-project-responsible.input';
import { ConstructionLogCreateNestedManyWithoutProjectInput } from '../construction-log/construction-log-create-nested-many-without-project.input';
import { MaterialEntryCreateNestedManyWithoutProjectInput } from '../material-entry/material-entry-create-nested-many-without-project.input';
import { PermitInspectionCreateNestedManyWithoutProjectInput } from '../permit-inspection/permit-inspection-create-nested-many-without-project.input';
import { ProjectPhotoCreateNestedManyWithoutProjectInput } from '../project-photo/project-photo-create-nested-many-without-project.input';

@InputType()
export class ProjectCreateWithoutDocumentsInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutProjectResponsibleInput, {nullable:false})
    responsible!: UserCreateNestedOneWithoutProjectResponsibleInput;

    @Field(() => ConstructionLogCreateNestedManyWithoutProjectInput, {nullable:true})
    logs?: ConstructionLogCreateNestedManyWithoutProjectInput;

    @Field(() => MaterialEntryCreateNestedManyWithoutProjectInput, {nullable:true})
    materials?: MaterialEntryCreateNestedManyWithoutProjectInput;

    @Field(() => PermitInspectionCreateNestedManyWithoutProjectInput, {nullable:true})
    permits?: PermitInspectionCreateNestedManyWithoutProjectInput;

    @Field(() => ProjectPhotoCreateNestedManyWithoutProjectInput, {nullable:true})
    photos?: ProjectPhotoCreateNestedManyWithoutProjectInput;
}
