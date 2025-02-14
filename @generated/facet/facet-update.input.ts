import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommunityUpdateOneWithoutFacetsNestedInput } from '../community/community-update-one-without-facets-nested.input';
import { FacetValueUpdateManyWithoutFacetNestedInput } from '../facet-value/facet-value-update-many-without-facet-nested.input';

@InputType()
export class FacetUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CommunityUpdateOneWithoutFacetsNestedInput, {nullable:true})
    Community?: CommunityUpdateOneWithoutFacetsNestedInput;

    @Field(() => FacetValueUpdateManyWithoutFacetNestedInput, {nullable:true})
    values?: FacetValueUpdateManyWithoutFacetNestedInput;
}
