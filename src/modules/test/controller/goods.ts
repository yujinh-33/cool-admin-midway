import {Provide} from "@midwayjs/decorator";
import {CoolController, BaseController} from "@cool-midway/core";
import {GoodsTestEntity} from "../entity/goods";
import {GoodsTestService} from "../service/goods";

@Provide()
@CoolController({
  api: ["add", "delete", "update", "info", "list", "page"],
  entity: GoodsTestEntity,

  // 使用用户Service
  service: GoodsTestService,
})
export class GoodsTestController extends BaseController {}
