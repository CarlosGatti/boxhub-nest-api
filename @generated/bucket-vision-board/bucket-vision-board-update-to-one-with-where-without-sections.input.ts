import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardUpdateWithoutSectionsInput } from './bucket-vision-board-update-without-sections.input';

@InputType()
export class BucketVisionBoardUpdateToOneWithWhereWithoutSectionsInput {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;

    @Field(() => BucketVisionBoardUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutSectionsInput)
    data!: BucketVisionBoardUpdateWithoutSectionsInput;
}
