import {Provide} from "@midwayjs/decorator";
import {CoolController, BaseController} from "@cool-midway/core";

import {UserTestEntity} from "../entity/user";
import {UserTestService} from "../service/user";

@Provide()
@CoolController({
  api: ["add", "delete", "update", "info", "list", "page"],
  entity: UserTestEntity,

  // 使用商品Service
  service: UserTestService,
})
export class UserTestController extends BaseController {}
