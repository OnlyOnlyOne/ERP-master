package com.dowsure.erp.model.dao.dataSource;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dowsure.erp.model.pojo.TOrder;
import org.apache.ibatis.annotations.Mapper;

@DS("dataSource")
public interface TOrderMapper extends BaseMapper<TOrder> {

}