package com.dowsure.erp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.dowsure.erp.model.dao")
public class ErpMasterApplication {

    public static void main(String[] args) {
        SpringApplication.run(ErpMasterApplication.class, args);
    }

}
