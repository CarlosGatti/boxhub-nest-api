import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { ConstructionLog } from '../construction-log/construction-log.model';
import { ProjectDocument } from '../project-document/project-document.model';
import { MaterialEntry } from '../material-entry/material-entry.model';
import { PermitInspection } from '../permit-inspection/permit-inspection.model';
import { ProjectPhoto } from '../project-photo/project-photo.model';
import { ProjectCount } from './project-count.output';

@ObjectType()
export class Project {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    client!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => ProjectStatus, {nullable:false,defaultValue:'PLANNING'})
    status!: keyof typeof ProjectStatus;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => Int, {nullable:false})
    responsibleId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    responsible?: User;

    @Field(() => [ConstructionLog], {nullable:true})
    logs?: Array<ConstructionLog>;

    @Field(() => [ProjectDocument], {nullable:true})
    documents?: Array<ProjectDocument>;

    @Field(() => [MaterialEntry], {nullable:true})
    materials?: Array<MaterialEntry>;

    @Field(() => [PermitInspection], {nullable:true})
    permits?: Array<PermitInspection>;

    @Field(() => [ProjectPhoto], {nullable:true})
    photos?: Array<ProjectPhoto>;

    @Field(() => ProjectCount, {nullable:false})
    _count?: ProjectCount;
}
