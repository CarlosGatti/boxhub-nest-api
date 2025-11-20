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
exports.ConstructionLog = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const log_type_enum_1 = require("../prisma/log-type.enum");
const graphql_type_json_1 = require("graphql-type-json");
const project_model_1 = require("../project/project.model");
const user_model_1 = require("../user/user.model");
const log_comment_model_1 = require("../log-comment/log-comment.model");
const construction_log_count_output_1 = require("./construction-log-count.output");
let ConstructionLog = class ConstructionLog {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], ConstructionLog.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], ConstructionLog.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], ConstructionLog.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ConstructionLog.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ConstructionLog.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_type_enum_1.LogType, { nullable: false }),
    __metadata("design:type", Object)
], ConstructionLog.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], ConstructionLog.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], ConstructionLog.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_model_1.Project, { nullable: false }),
    __metadata("design:type", project_model_1.Project)
], ConstructionLog.prototype, "project", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false }),
    __metadata("design:type", user_model_1.User)
], ConstructionLog.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_model_1.LogComment], { nullable: true }),
    __metadata("design:type", Array)
], ConstructionLog.prototype, "comments", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_count_output_1.ConstructionLogCount, { nullable: false }),
    __metadata("design:type", construction_log_count_output_1.ConstructionLogCount)
], ConstructionLog.prototype, "_count", void 0);
ConstructionLog = __decorate([
    (0, graphql_2.ObjectType)()
], ConstructionLog);
exports.ConstructionLog = ConstructionLog;
//# sourceMappingURL=construction-log.model.js.map