"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionLogCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_type_enum_1 = require("../prisma/log-type.enum");
const graphql_type_json_1 = require("graphql-type-json");
const project_create_nested_one_without_logs_input_1 = require("../project/project-create-nested-one-without-logs.input");
const user_create_nested_one_without_construction_logs_input_1 = require("../user/user-create-nested-one-without-construction-logs.input");
const log_comment_create_nested_many_without_log_input_1 = require("../log-comment/log-comment-create-nested-many-without-log.input");
let ConstructionLogCreateInput = class ConstructionLogCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ConstructionLogCreateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ConstructionLogCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_type_enum_1.LogType, { nullable: false }),
    __metadata("design:type", Object)
], ConstructionLogCreateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], ConstructionLogCreateInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ConstructionLogCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_nested_one_without_logs_input_1.ProjectCreateNestedOneWithoutLogsInput, { nullable: false }),
    __metadata("design:type", project_create_nested_one_without_logs_input_1.ProjectCreateNestedOneWithoutLogsInput)
], ConstructionLogCreateInput.prototype, "project", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_construction_logs_input_1.UserCreateNestedOneWithoutConstructionLogsInput, { nullable: false }),
    __metadata("design:type", user_create_nested_one_without_construction_logs_input_1.UserCreateNestedOneWithoutConstructionLogsInput)
], ConstructionLogCreateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_create_nested_many_without_log_input_1.LogCommentCreateNestedManyWithoutLogInput, { nullable: true }),
    __metadata("design:type", log_comment_create_nested_many_without_log_input_1.LogCommentCreateNestedManyWithoutLogInput)
], ConstructionLogCreateInput.prototype, "comments", void 0);
ConstructionLogCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogCreateInput);
exports.ConstructionLogCreateInput = ConstructionLogCreateInput;
//# sourceMappingURL=construction-log-create.input.js.map