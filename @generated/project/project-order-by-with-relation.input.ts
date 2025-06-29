import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ConstructionLogOrderByRelationAggregateInput } from '../construction-log/construction-log-order-by-relation-aggregate.input';
import { ProjectDocumentOrderByRelationAggregateInput } from '../project-document/project-document-order-by-relation-aggregate.input';
import { MaterialEntryOrderByRelationAggregateInput } from '../material-entry/material-entry-order-by-relation-aggregate.input';
import { PermitInspectionOrderByRelationAggregateInput } from '../permit-inspection/permit-inspection-order-by-relation-aggregate.input';
import { ProjectPhotoOrderByRelationAggregateInput } from '../project-photo/project-photo-order-by-relation-aggregate.input';

@InputType()
export class ProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    client?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    endDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    responsibleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    responsible?: UserOrderByWithRelationInput;

    @Field(() => ConstructionLogOrderByRelationAggregateInput, {nullable:true})
    logs?: ConstructionLogOrderByRelationAggregateInput;

    @Field(() => ProjectDocumentOrderByRelationAggregateInput, {nullable:true})
    documents?: ProjectDocumentOrderByRelationAggregateInput;

    @Field(() => MaterialEntryOrderByRelationAggregateInput, {nullable:true})
    materials?: MaterialEntryOrderByRelationAggregateInput;

    @Field(() => PermitInspectionOrderByRelationAggregateInput, {nullable:true})
    permits?: PermitInspectionOrderByRelationAggregateInput;

    @Field(() => ProjectPhotoOrderByRelationAggregateInput, {nullable:true})
    photos?: ProjectPhotoOrderByRelationAggregateInput;
}
