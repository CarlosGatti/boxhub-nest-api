import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ConstructionLogOrderByRelationAggregateInput } from '../construction-log/construction-log-order-by-relation-aggregate.input';
import { ProjectDocumentOrderByRelationAggregateInput } from '../project-document/project-document-order-by-relation-aggregate.input';
import { MaterialEntryOrderByRelationAggregateInput } from '../material-entry/material-entry-order-by-relation-aggregate.input';
import { PermitInspectionOrderByRelationAggregateInput } from '../permit-inspection/permit-inspection-order-by-relation-aggregate.input';
import { ProjectPhotoOrderByRelationAggregateInput } from '../project-photo/project-photo-order-by-relation-aggregate.input';
export declare class ProjectOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    client?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: SortOrderInput;
    responsibleId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    responsible?: UserOrderByWithRelationInput;
    logs?: ConstructionLogOrderByRelationAggregateInput;
    documents?: ProjectDocumentOrderByRelationAggregateInput;
    materials?: MaterialEntryOrderByRelationAggregateInput;
    permits?: PermitInspectionOrderByRelationAggregateInput;
    photos?: ProjectPhotoOrderByRelationAggregateInput;
}
