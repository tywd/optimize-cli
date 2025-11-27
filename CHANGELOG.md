# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-11-28

### Fixed

- 修复模块系统兼容性问题，支持在不同Node.js环境中运行
- 优化报告生成功能，确保在各种环境下都能正确生成HTML报告
- 修复文件扩展名问题，使用.cjs扩展名确保CommonJS模块正确加载

### Changed

- 更新bin文件扩展名从.js到.cjs以提高兼容性
- 移除ES模块语法，改用CommonJS语法以提高兼容性
- 优化错误处理和用户提示信息

## [1.3.0] - 2025-11-25

### Changed

- 移除VitePress技术文档站点集成
- 修改文档链接指向GitHub上的MD文件
- 移除在测试项目中生成VitePress站点的功能
- 更新README文档，移除VitePress相关说明

### Removed

- 移除VitePress相关依赖
- 移除VitePress相关脚本命令

## [1.2.0] - 2025-11-25

### Added

- 集成VitePress技术文档站点
- 在生成报告时自动启动VitePress文档站点
- 动态端口检测和适配功能
- 完整的技术文档内容，包括实现过程、架构设计和迭代展望
- 更新README文档，添加VitePress功能说明

### Changed

- 修改CLI代码，优化VitePress启动流程
- 更新detector.js，支持动态端口设置
- 优化报告模板，使用实际的VitePress端口

### Fixed

- 修复报告中链接端口不匹配的问题

## [1.1.0] - 2025-11-25

### Added

- 为每个优化项添加详细的优化建议文档
- 在生成Web报告时自动复制文档目录到目标项目
- 在报告中添加指向详细优化指南的链接
- 更新README文档，添加关于优化建议文档的说明

### Changed

- 修改generateReport函数，添加文档目录复制功能
- 更新package.json，将docs目录添加到发布文件中

### Fixed

- 修复报告生成时文档链接路径问题

## [1.0.0] - 2025-11-24

### Added

- 初始化项目结构
- 实现21个优化项的检测功能
- 实现CLI命令行接口
- 实现Web报告生成功能
- 支持`optimize-cli check`命令格式