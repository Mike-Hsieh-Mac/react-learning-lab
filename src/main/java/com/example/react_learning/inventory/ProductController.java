package com.example.react_learning.inventory;

import jakarta.validation.Valid;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;


@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;
    private final ProductRepository productRepository;

    public ProductController(ProductService productService, ProductRepository productRepository) {
        this.productService = productService;
        this.productRepository = productRepository;
    }
    // Pageable 是 Spring 幫你組好的物件：page（第幾頁，從 0 開始）、
    // size（每頁幾筆）、sort（依哪個欄位排序）都會自動從 query string 解析進來。
    @GetMapping
    public Page<ProductEntity> getProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductEntity createProduct(@Valid @RequestBody ProductRequest request) {
        return productRepository.save(
                new ProductEntity(request.name(), request.price(), request.stock()));
    }

    @PostMapping("/{id}/purchase")
    public ProductEntity purchase(@PathVariable Long id) {
        return productService.purchase(id);
    }
}
