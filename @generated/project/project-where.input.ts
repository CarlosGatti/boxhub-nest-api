import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProjectStatusFilter } from '../prisma/enum-project-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ConstructionLogListRelationFilter } from '../construction-log/construction-log-list-relation-filter.input';
import { ProjectDocumentListRelationFilter } from '../project-document/project-document-list-relation-filter.input';
import { MaterialEntryListRelationFilter } from '../material-entry/material-entry-list-relation-filter.input';
import { PermitInspectionListRelationFilter } from '../permit-inspection/permit-inspection-list-relation-filter.input';
import { ProjectPhotoListRelationFilter } from '../project-photo/project-photo-list-relation-filter.input';

@InputType()
export class ProjectWhereInput {

    @Field(() => [ProjectWhereInput], {nullable:true})
    AND?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    OR?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    NOT?: Array<ProjectWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    client?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => EnumProjectStatusFilter, {nullable:true})
    status?: EnumProjectStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    responsibleId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    responsible?: UserRelationFilter;

    @Field(() => ConstructionLogListRelationFilter, {nullable:true})
    logs?: ConstructionLogListRelationFilter;

    @Field(() => ProjectDocumentListRelationFilter, {nullable:true})
    documents?: ProjectDocumentListRelationFilter;

    @Field(() => MaterialEntryListRelationFilter, {nullable:true})
    materials?: MaterialEntryListRelationFilter;

    @Field(() => PermitInspectionListRelationFilter, {nullable:true})
    permits?: PermitInspectionListRelationFilter;

    @Field(() => ProjectPhotoListRelationFilter, {nullable:true})
    photos?: ProjectPhotoListRelationFilter;
}
