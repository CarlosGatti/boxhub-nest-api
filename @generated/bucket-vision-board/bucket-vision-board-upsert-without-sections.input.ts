import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardUpdateWithoutSectionsInput } from './bucket-vision-board-update-without-sections.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutSectionsInput } from './bucket-vision-board-create-without-sections.input';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';

@InputType()
export class BucketVisionBoardUpsertWithoutSectionsInput {

    @Field(() => BucketVisionBoardUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutSectionsInput)
    update!: BucketVisionBoardUpdateWithoutSectionsInput;

    @Field(() => BucketVisionBoardCreateWithoutSectionsInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutSectionsInput)
    create!: BucketVisionBoardCreateWithoutSectionsInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;
}
