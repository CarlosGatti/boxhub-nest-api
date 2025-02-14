import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyWhereInput } from './family-where.input';
import { Type } from 'class-transformer';
import { FamilyUpdateWithoutContainersInput } from './family-update-without-containers.input';

@InputType()
export class FamilyUpdateToOneWithWhereWithoutContainersInput {

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    where?: FamilyWhereInput;

    @Field(() => FamilyUpdateWithoutContainersInput, {nullable:false})
    @Type(() => FamilyUpdateWithoutContainersInput)
    data!: FamilyUpdateWithoutContainersInput;
}
