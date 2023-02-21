import {Provide} from "@midwayjs/decorator";
import {BaseService} from "@cool-midway/core";
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";

import {GoodsTestEntity} from "../entity/goods";

/**
 * 定义商品Service用于扩展默认的list接口，增加多对一的查询
 */
@Provide()
export class GoodsTestService extends BaseService {
  @InjectEntityModel(GoodsTestEntity)
  goodsTestService: Repository<GoodsTestEntity>;

  async list() {
    return this.goodsTestService.find({
      relations: ["user"],
    });
  }
}
