package com.dowsure.erp;

import com.dowsure.erp.model.dao.dataSource.TOrderMapper;
import com.dowsure.erp.model.pojo.TOrder;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class ErpMasterApplicationTests {

    @Autowired
    private TOrderMapper tOrderMapper;
    @Test
    void testGetAll() {
        List<TOrder> tOrders = tOrderMapper.selectList(null);
        System.out.println(tOrders);
    }

}
