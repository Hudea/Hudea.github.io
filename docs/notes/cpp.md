# C++ 核心与现代特性笔记

## 1. 现代 C++ 核心特性

### 1.1 移动语义与完美转发
- `std::move` 与 `std::forward` 的本质
- 右值引用与万能引用 (Universal Reference)

### 1.2 智能指针与资源管理 (RAII)
- `std::unique_ptr` vs `std::shared_ptr`
- 循环引用与 `std::weak_ptr`

## 2. 内存模型与并发

- `std::atomic` 与内存序 (Memory Order)
- 锁机制与无锁并发队列
