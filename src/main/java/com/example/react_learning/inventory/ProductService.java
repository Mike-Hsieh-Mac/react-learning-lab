package com.example.react_learning.inventory;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductEntity purchase(Long id) {
        ProductEntity product = productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "找不到商品"));

        if (product.getStock() <= 0) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "庫存不足，手慢了");
        }

        product.decreaseStock();
        // save 的當下，Hibernate 會用 @Version 檢查：
        // 如果別人在我讀取之後、我 save 之前，已經搶先改過這筆資料，
        // 這裡就會丟 ObjectOptimisticLockingFailureException，被下面的 Controller 接住轉成 409。
        return productRepository.save(product);
    }
}
