#!/usr/bin/env node

// 一个独立的文档构建脚本，用于解决 ESM 和 CommonJS 的兼容性问题
// 这个脚本会创建一个临时的 package.json 文件，添加 type: "module"，然后运行 VitePress 构建

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 获取项目根目录
const rootDir = path.resolve(__dirname, '..');

// 备份原始 package.json
const originalPackageJsonPath = path.join(rootDir, 'package.json');
const backupPackageJsonPath = path.join(rootDir, 'package.json.bak');

console.log('备份原始 package.json...');
const originalPackageJson = fs.readFileSync(originalPackageJsonPath, 'utf8');
fs.writeFileSync(backupPackageJsonPath, originalPackageJson);

try {
  // 修改 package.json 添加 type: "module"
  console.log('创建用于文档构建的 package.json...');
  const packageJson = JSON.parse(originalPackageJson);
  packageJson.type = 'module';
  
  fs.writeFileSync(originalPackageJsonPath, JSON.stringify(packageJson, null, 2));
  
  // 运行 VitePress 构建
  console.log('运行 VitePress 构建...');
  execSync('pnpm run docs:build', { 
    cwd: rootDir, 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_OPTIONS: '--experimental-import-meta-resolve'
    }
  });
  
  console.log('文档构建完成！');
} catch (error) {
  console.error('文档构建失败:', error.message);
  process.exit(1);
} finally {
  // 恢复原始 package.json
  console.log('恢复原始 package.json...');
  fs.writeFileSync(originalPackageJsonPath, originalPackageJson);
  fs.unlinkSync(backupPackageJsonPath);
  
  console.log('完成！');
}